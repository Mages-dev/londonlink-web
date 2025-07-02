import parentStyles from "../../Home.module.css"
import styles from "../Capa.module.css"
import { useLanguage } from "@/context";

const Titulo: React.FC = () => {
  const { t } = useLanguage();
	return (
    <div className={`${styles.textBlock}`}>
      <h1 className={`${styles.h1} ${styles.shadow}`}>{t("home.intro.title", parentStyles)}</h1>
      <p className={`${styles.paragrafo}`}>{t("home.intro.subtext")}</p>
    </div>
	)
}

export default Titulo