import React from "react";
import { SideBarProps } from "@/interfaces";
import styles from "../Navigation.module.css";

const Sidebar: React.FC<SideBarProps> = ({
  sections,
  titles,
  isOpen,
  toggle,
  //activeSection,
  isActive,
  scrollToSection
}) => {
  return (
    <div
      className={`${styles.sidebarContainer} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <button className={styles.closeButton} onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>

      <div className={styles.sidebarContent}>
        {sections.map((section, index) => (
          <button
            key={section}
            className={`${styles.sidebarItem} ${
              isActive(section) ? styles.active : ''
            }`}
            onClick={() => {
              scrollToSection(section);
              toggle();
            }}
          >
            {titles[index]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;