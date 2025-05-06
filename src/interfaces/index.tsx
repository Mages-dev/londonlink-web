import { ReactNode } from 'react';

export interface SectionComponentProps {
  id: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface Props {
	id:string;
}

export interface MenuProps {
	logoOpacity: number;
	activeSection: string;
}