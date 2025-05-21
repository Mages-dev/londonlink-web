import { SectionComponentProps } from "@/interfaces";
import { themes } from "@/Styles/theme"

export type SectionComponents = {
  [key: string]: React.FC<SectionComponentProps>;
}

export type ThemeName = keyof typeof themes;

export type Theme = typeof themes.light;

export type ThemeContextType = {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
};