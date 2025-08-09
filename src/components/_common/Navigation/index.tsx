"use client";
import { useState, useEffect } from "react"
import { MenuProps } from "@/interfaces"
import { useSections, useLanguage } from "@/context";
import { ThemeSwitcher } from "@/Common/ThemeSwitcher";
import { useForceSection } from '@/context/ForceSectionContext';
import LanguageSwitcher from "@/Common/LanguageSwitcher";
import Button from "@/Common/Button";
import Logo from "./Logo";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import styles from "./Navigation.module.css"

const Navigation: React.FC<MenuProps> = ({
  activeSection: initialActiveSection = 'home'
}) => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState(initialActiveSection);
  const { sections, titles } = useSections();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setForceSection } = useForceSection();

  // Função de scroll melhorada
  const scrollToSection = (sectionId: string) => {
    setForceSection(sectionId); // força carregamento da section

    // tenta scrollar quando a section já existir no DOM
    const tryScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        setActiveSection(sectionId);
        setIsOpen(false);
        setForceSection(null); // limpa flag após scroll
      } else {
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(tryScroll);
  };

  // Função de verificação de seção ativa
  const isActive = (sectionName: string): boolean => {
    return activeSection === sectionName;
  };

  // Efeito para detectar seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = activeSection;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition > offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections]);

  return (
    <div className={`${styles.menucontainer} ${scrolled ? styles.scrolled : ""}`}>
      <Logo />
      <div className={styles.navWrapper}>
        <nav className={`${styles.menubar} ${scrolled ? styles.scrolled : ""}`}>
          <Sidebar
            sections={sections}
            titles={titles}
            isOpen={isOpen}
            toggle={() => setIsOpen(!isOpen)}
            activeSection={activeSection}
            isActive={isActive}
            scrollToSection={scrollToSection}
          />
          <Navbar
            sections={sections}
            titles={titles}
            toggle={() => setIsOpen(!isOpen)}
            activeSection={activeSection}
            isActive={isActive}
            scrollToSection={scrollToSection}
          />
          <div className="hidden md:block">
            <Button
              caption={String(t("menu.preregistration"))}
              transparentBackground={true} />
          </div>
        </nav>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navigation;