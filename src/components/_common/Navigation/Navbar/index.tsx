import React from "react";
import { NavBarProps } from "@/interfaces";
import { useLanguage } from "@/context";
import styles from "../Navigation.module.css";

const Navbar: React.FC<NavBarProps> = ({
  sections,
  titles,
  toggle,
  //activeSection,
  isActive,
  scrollToSection
}) => {
  const { t } = useLanguage();
  return (
    <div className="w-full sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <button
            type="button"
            className="inline-flex items-center md:hidden"
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>

          <div className="hidden md:flex gap-8">
            {sections.map((section, index) => (
              <button
                key={section}
                className={`${styles.navItem} ${
                  isActive(section) ? styles.active : ''
                }`}
                onClick={() => scrollToSection(section)}
              >
                {t(`menu.${titles[index]}`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;