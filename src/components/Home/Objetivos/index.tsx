import parentStyles from "../Home.module.css"
import styles from "./Objetivos.module.css"
import BgRightRoundedFade from "@/Common/BgRightRoundedFade"
import ImageCard from "@/Common/ImageCard"
import { useLanguage } from "@/context";
const Objetivos: React.FC = () => {
  const { t } = useLanguage();
	return (
    <div className={styles.container}>
      <BgRightRoundedFade top={580}>
        <div className={styles.titlesContainer}>
          <div className={styles.mainTitle}>{t("home.objectives.title", parentStyles)}</div>
          <div className={styles.secondaryTitle}>{t("home.objectives.subtext")}</div>
        </div>

        <div className={styles.imageCardsContainer}>
          <ImageCard image="/img/home-2.png" caption={String(t("home.objectives.card1.text"))} />
          <ImageCard image="/img/home-3.png" caption={String(t("home.objectives.card2.text"))} />
          <ImageCard image="/img/home-4.png" caption={String(t("home.objectives.card3.text"))} />
          <ImageCard image="/img/home-5.png" caption={String(t("home.objectives.card4.text"))} />
          <ImageCard image="/img/home-6.png" caption={String(t("home.objectives.card5.text"))} />
        </div>
      </BgRightRoundedFade>
    </div>
	)
}

export default Objetivos