import React, { useState } from 'react';
import Image from 'next/image'
import { MenuProps } from "@/interfaces"
import { useSections } from '@/contexts'

const scrollToSection = (sectionId:string) => {
	document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const isActive = (activeSection:string, sectionName:string):string => {
	return activeSection === sectionName ? 'active' : ''
}

const Menu: React.FC<MenuProps> = ({ logoOpacity, activeSection }) => {
	const { sections, titles, defaultTitle } = useSections();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	
	const styles = { opacity: logoOpacity, transition: 'opacity 0.5s ease' };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
	};
	
  const handleMenuItemClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
	};

	return (
		<nav>
      <Image src="/logo.svg" width={100} height={100} alt={defaultTitle} style={styles} />
			
			<div>
				{sections.map((section, index) => (
					<div
						key={section}
						className={isActive(activeSection, section)}
						onClick={() => scrollToSection(section)}
					>
						{titles[index]}
					</div>
				))}
			</div>
			
			<button onClick={toggleMobileMenu}>
        <span />
        <span />
        <span />
			</button>

			<div isopen={isMobileMenuOpen}>
        {sections.map((section, index) => (
          <div
            key={section}
            className={isActive(activeSection, section)}
            onClick={() => handleMenuItemClick(section)}
          >
            {titles[index]}
          </div>
        ))}
      </div>
		</nav>
	)
}

export default Menu