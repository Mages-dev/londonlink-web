import parentStyles from "../Home.module.css";
import styles from "./Feedbacks.module.css";
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade";
import Depoimento from "./Depoimento";
import { useLanguage } from "@/context";
const Feedbacks: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div>
      <BgLeftRoundedFade top={600}>
        <div className={styles.depoimentosTituloGrid}>
          <div className={styles.depoimentosTitulo}>{t("home.feedback.title", parentStyles)}</div>
          <div className={styles.depoimentosSubtexto}>{t("home.feedback.subtext", parentStyles)}</div>
        </div>
        <div className={styles.depoimentosGrid}>
          <Depoimento image="/img/home-7.jpg" title={String(t("home.feedback.card1.title"))}>{t("home.feedback.card1.text")}</Depoimento>
          <Depoimento image="/img/home-8.jpg" title={String(t("home.feedback.card2.title"))}>{t("home.feedback.card2.text")}</Depoimento>
          <Depoimento image="/img/home-9.jpg" title={String(t("home.feedback.card3.title"))}>{t("home.feedback.card3.text")}</Depoimento>
          <Depoimento image="/img/home-10.jpg" title={String(t("home.feedback.card4.title"))}>{t("home.feedback.card4.text")}</Depoimento>
        </div>
      </BgLeftRoundedFade>
    </div>
  );
};

export default Feedbacks;
