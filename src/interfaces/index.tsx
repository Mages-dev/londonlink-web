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

export interface ImgProps {
	src: string;
}

export interface ButtonProps {
	caption?: string
	invertedColors?: boolean
	transparentBackground?: boolean
}

export interface DepoimentoProps {
	image: string;
	title: string;
	children: ReactNode;
}

export interface MenuProps {
	logoOpacity?: number;
	activeSection: string;
  children?: ReactNode;
}

export interface BgCircleProps {
  x?: string
  y?: string
  radius?: string
}

export interface RoundedFadeProps {
	top?: number
  children?: ReactNode
}

export interface SmallCardProps {
	title?: string
	icon?: string
	children?: ReactNode
}

export interface ImageCardProps {
	image?: string
	caption?: string
}

export interface NavBarProps {
	sections: string[];
	titles: string[];
	toggle: () => void;
	activeSection: string;
	isActive: (sectionName: string) => boolean;
	scrollToSection: (sectionId: string) => void;
}

export interface SideBarProps {
	sections: string[];
	titles: string[];
	isOpen: boolean;
	toggle: () => void;
	activeSection: string;
	isActive: (sectionName: string) => boolean;
	scrollToSection: (sectionId: string) => void;
}