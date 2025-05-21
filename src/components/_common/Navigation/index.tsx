"use client";
import { useState, useEffect } from "react"
import { MenuProps } from "@/interfaces"
import { useSections } from "@/context";
import { ThemeSwitcher } from "@/Common/ThemeSwitcher";
import Logo from "./Logo";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import styles from "./Navigation.module.css"
import Button from "./Button";

const scrollToSection = (sectionId:string) => {
	document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const isActive = (activeSection:string, sectionName:string):string => {
  return activeSection === sectionName ? 'active' : ''
}

const Navigation: React.FC<MenuProps> = ({
//  logoOpacity,
  activeSection,
}) => {
  const {
    sections,
    titles,
    //  defaultTitle
  } = useSections();
	//const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
	//const style = { opacity: 1, transition: 'opacity 0.5s ease' };
  
  const toggle = () => setIsOpen(!isOpen);
	
/*
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
	};
	
  const handleMenuItemClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
	};
*/
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className={`${styles.menucontainer} ${scrolled ? styles.scrolled : ""}`}>
        <Logo />
        <div className={styles.navWrapper}>
          <nav className={`${styles.menubar} ${scrolled ? styles.scrolled : ""}`}>
            <Sidebar sections={sections} titles={titles} toggle={toggle} activeSection={activeSection} isActive={isActive} scrollToSection={scrollToSection} isOpen={isOpen} />
            <Navbar sections={sections} titles={titles} toggle={toggle} activeSection={activeSection} isActive={isActive} scrollToSection={scrollToSection} />
            <div className="hidden md:block">
              <Button />
            </div>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </>
	);
};

export default Navigation;