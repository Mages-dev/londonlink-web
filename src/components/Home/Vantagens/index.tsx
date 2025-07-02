import parentStyles from "../Home.module.css"
import styles from "./Vantagens.module.css"
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade"
import SmallCard from "@/Common/SmallCard"
import { useLanguage } from "@/context";
const Vantagens: React.FC = () => {
  const { t } = useLanguage();
	return (
    <div className={styles.vantagensContainer}>
      <BgLeftRoundedFade top={320}>
        {t("home.advantages.title", parentStyles)}
        <div className={styles.cardsContainer}>
          <SmallCard title={String(t("home.advantages.card1.title"))} icon="home-ap">
            {t("home.advantages.card1.text")}
          </SmallCard>
          <SmallCard title={String(t("home.advantages.card2.title"))} icon="home-ft">
            {t("home.advantages.card2.text")}
          </SmallCard>
          <SmallCard title={String(t("home.advantages.card3.title"))} icon="home-er">
            {t("home.advantages.card3.text")}
          </SmallCard>
          <SmallCard title={String(t("home.advantages.card4.title"))} icon="home-hf">
            {t("home.advantages.card4.text")}
          </SmallCard>
          <SmallCard title={String(t("home.advantages.card5.title"))} icon="home-cp">
            {t("home.advantages.card5.text")}
          </SmallCard>
        </div>
      </BgLeftRoundedFade>
    </div>
	)
}

export default Vantagens