import { useState, useEffect } from "react";
import parentStyles from "../Sobre.module.css"
import styles from "./Necessidades.module.css"
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade"
import SmallCard from "@/Common/SmallCard"
import { useLanguage } from "@/context"
import { CardNecessidades } from "@/interfaces";

const Necessidades: React.FC = () => {
  const { t } = useLanguage();
    const [cards, setCards] = useState<CardNecessidades[]>([]);
    useEffect(() => {
      const loadCards = async () => {
        const prfx = 'about.needs.card';
        const arr:CardNecessidades[] = [];
  
        for (let i = 1; i <= 6; i++) {
          const texto = t(`${prfx}${i}.text`, parentStyles);
          const icone = `about-${i}`;
          arr.push({ icone, texto });
        }
  
        setCards(arr);
      };
  
      loadCards();
    }, [t]);

	return (
		<div className={styles.component}>
			<BgLeftRoundedFade top={320}>
				<div className={`tituloComponente painelNecessidadesTitulo bordaTexto ${styles.titulo}`}>{t("about.needs.title", parentStyles)}</div>
        <div className={`painelNecessidadesCardsContainer ${styles.cardsContainer}`}>
          {cards.map((need, index) => (
            <SmallCard key={index} title="" icon={need.icone}>
              {need.texto}
            </SmallCard>
          ))}
        </div>
			</BgLeftRoundedFade>
		</div>
	)
}

export default Necessidades