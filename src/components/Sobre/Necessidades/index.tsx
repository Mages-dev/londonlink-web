import parentStyles from "../Sobre.module.css"
import styles from "./Necessidades.module.css"
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade"
import SmallCard from "@/Common/SmallCard"
import { useLanguage } from "@/context"

const Necessidades: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={styles.component}>
			<BgLeftRoundedFade top={320}>
				<div className={`${styles.titulo}`}>{t("about.needs.title", parentStyles)}</div>
        <div className={styles.cardsContainer}>
          <SmallCard title="" icon="about-1">
						{t("about.needs.card1.text", parentStyles)}
          </SmallCard>
          <SmallCard title="" icon="about-2">
						{t("about.needs.card2.text", parentStyles)}
          </SmallCard>
          <SmallCard title="" icon="about-3">
						{t("about.needs.card3.text", parentStyles)}
          </SmallCard>
          <SmallCard title="" icon="about-4">
						{t("about.needs.card4.text", parentStyles)}
          </SmallCard>
          <SmallCard title="" icon="about-5">
						{t("about.needs.card5.text", parentStyles)}
          </SmallCard>
          <SmallCard title="" icon="about-6">
						{t("about.needs.card6.text", parentStyles)}
          </SmallCard>
        </div>
			</BgLeftRoundedFade>
		</div>
	)
}

export default Necessidades