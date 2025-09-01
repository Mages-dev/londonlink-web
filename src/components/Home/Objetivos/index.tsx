import { useState, useEffect } from "react";
import parentStyles from "../Home.module.css"
import styles from "./Objetivos.module.css"
import BgRightRoundedFade from "@/Common/BgRightRoundedFade"
import ImageCard from "@/Common/ImageCard"
import { useLanguage } from "@/context";
import { CardObjetivos } from "@/interfaces";

const Objetivos: React.FC = () => {
  const { t } = useLanguage();
  const [cards, setCards] = useState<CardObjetivos[]>([]);
  useEffect(() => {
    const loadCards = async () => {
      const prfx = 'home.objectives.card';
      const arr:CardObjetivos[] = [];

      for (let i = 1; i <= 5; i++) {
        const imagem = `/img/home-${i+1}.png`;
        const rotulo = String(t(`${prfx}${i}.text`));
        arr.push({ imagem, rotulo });
      }

      setCards(arr);
    };

    loadCards();
  }, [t]);

  return (
    <div className={styles.container}>
      <BgRightRoundedFade top={580}>
        <div className={`painelObjetivosTituloContainer ${styles.titlesContainer}`}>
          <div className={`tituloComponente bordaTexto ${styles.mainTitle}`}>{t("home.objectives.title", parentStyles)}</div>
          <div className={`subtituloComponente bordaTexto ${styles.secondaryTitle}`}>{t("home.objectives.subtext")}</div>
        </div>
        <div className={`painelObjetivosImageCardsContainer ${styles.imageCardsContainer}`}>
          {cards.map((goal, index) => (
            <ImageCard key={index} image={goal.imagem} caption={goal.rotulo} />
          ))}
        </div>
      </BgRightRoundedFade>
    </div>
	)
}

export default Objetivos