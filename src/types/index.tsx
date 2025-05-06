import { SectionComponentProps } from "@/interfaces";

export type SectionComponents = {
  [key: string]: React.FC<SectionComponentProps>;
}