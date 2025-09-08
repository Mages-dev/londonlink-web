"use client";
import { useState, useEffect, useRef } from "react"
import { MenuProps } from "@/interfaces"
import { useSections, useLanguage } from "@/context";
import { ThemeSwitcher } from "@/Common/ThemeSwitcher";
import { useForceSection } from '@/context/ForceSectionContext';
import LanguageSwitcher from "@/Common/LanguageSwitcher";
import Button from "@/Common/Button";
import Logo from "./Logo";
import Navbar from "./Navbar"
import styles from "./Navigation.module.css"

const Navigation: React.FC<MenuProps> = ({
  activeSection: initialActiveSection = 'home'
}) => {
  const { t } = useLanguage();
  const objectRef = useRef<HTMLObjectElement>(null);
  const [activeSection, setActiveSection] = useState(initialActiveSection);
  const { sections, titles } = useSections();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setPreloadUntil } = useForceSection();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Função de toggle para alternar o estado
  const toggleDrawer = () => {
    setDrawerOpen(prevState => !prevState);
    console.log(drawerOpen);
  };

  const updateSvgColors = () => {
    try {
      const svgDoc = objectRef.current?.contentDocument;
      const targetGroup = svgDoc?.getElementById('Icon');
      
      if (targetGroup) {
        const style = getComputedStyle(document.documentElement);
        const iconColor = style.getPropertyValue('--options-icon-color').trim();
        targetGroup.setAttribute('fill', iconColor);
      }
    } catch (error) {
      console.error('Error updating SVG:', error);
    }
  };

  useEffect(() => {
    updateSvgColors();
  });


  const scrollToSection = (sectionId: string) => {
    setPreloadUntil(sectionId); // força o carregamento até a section clicada

    requestAnimationFrame(() => {
      const checkReady = () => {
        const index = sections.indexOf(sectionId);
        const allLoaded = sections
          .slice(0, index + 1)
          .every((sec) => document.getElementById(sec));

        if (allLoaded) {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = 100;
            const offsetPosition =
              element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
          setPreloadUntil(null);
          setActiveSection(sectionId);
          setIsOpen(false);
        } else {
          requestAnimationFrame(checkReady);
        }
      };
      checkReady();
    });
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
    <div className={`${styles.menucontainer} ${drawerOpen ? styles.expanded : ""} ${scrolled ? styles.scrolled : ""}`}>
      <Logo />
      <div className={styles.navWrapper}>
        <nav className={`${styles.menubar} ${isOpen ? styles.expanded : ""} ${scrolled ? styles.scrolled : ""}`}>
          <Navbar
            sections={sections}
            titles={titles}
            toggle={() => setIsOpen(!isOpen)}
            activeSection={activeSection}
            isActive={isActive}
            scrollToSection={scrollToSection}
          />
          <div className={`${styles.preregbutton} hidden md:block`}>
            <Button
              caption={String(t("menu.preregistration"))}
              transparentBackground={true} />
          </div>
          <div className={styles.menuSwitchers}>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
      <div 
        className={styles.drawerIcon}
        onClick={toggleDrawer}
      >
        <object
          ref={objectRef}
          type="image/svg+xml"
          data={`/img/icons/options.svg`}
          aria-label={""}
          onLoad={updateSvgColors}
        />
      </div>
      <div className={styles.drawerContent}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navigation;