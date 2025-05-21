import { ReactNode } from 'react';

export interface SectionComponentProps {
  id: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface Props {
	id: string;
}

export interface MenuProps {
	logoOpacity: number;
	activeSection: string;
  children: ReactNode;
}

export interface NavBarProps {
	sections: string[];
	titles: string[];
	toggle: () => void;
	activeSection: string;
	isActive: (activeSection: string, sectionName: string) => string;
	scrollToSection: (sectionId: string) => void;
}

export interface SideBarProps {
	sections: string[];
	titles: string[];
	isOpen: boolean;
	toggle: () => void;
	activeSection: string;
	isActive: (activeSection: string, sectionName: string) => string;
	scrollToSection: (sectionId: string) => void;
}