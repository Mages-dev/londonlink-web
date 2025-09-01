import { useState, useEffect } from "react";
import parentStyles from "../Home.module.css"
import styles from "./Vantagens.module.css"
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade"
import SmallCard from "@/Common/SmallCard"
import { useLanguage } from "@/context";
import { CardVantagens } from "@/interfaces";

const Vantagens: React.FC = () => {
  const { t } = useLanguage();
  const [cards, setCards] = useState<CardVantagens[]>([]);
  useEffect(() => {
    const loadCards = async () => {
      const prfx = 'home.advantages.card';
      const icones: string[] = ["ap","ft","er","hf","cp"];
      const arr:CardVantagens[] = [];

      for (let i = 1; i <= 5; i++) {
        const titulo = String(t(`${prfx}${i}.title`));
        const texto = t(`${prfx}${i}.text`); // mantém ReactNode
        const icone = `home-${icones[i-1]}`;
        arr.push({ icone, titulo, texto });
      }

      setCards(arr);
    };

    loadCards();
  }, [t]);

	return (
    <div className={`painelVantagem ${styles.vantagensContainer}`}>
      <BgLeftRoundedFade top={320}>
        <div className={`tituloComponente ${styles.cardsContainer}`}>{t("home.advantages.title", parentStyles)}</div>
        <div className={`painelVantagemCardsContainer ${styles.cardsContainer}`}>
          {cards.map((adv, index) => (
            <SmallCard key={index} title={adv.titulo} icon={adv.icone}>
              {adv.texto}
            </SmallCard>
          ))}
        </div>
      </BgLeftRoundedFade>
    </div>
	)
}

export default Vantagens