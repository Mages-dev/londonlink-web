import { useState, useEffect } from "react";
import parentStyles from "../Home.module.css";
import styles from "./Feedbacks.module.css";
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade";
import Depoimento from "./Depoimento";
import { useLanguage } from "@/context";

const Feedbacks: React.FC = () => {
  const { t } = useLanguage();

  const [cards, setCards] = useState<
    { img: string; title: string; text: React.ReactNode }[]
  >([]);
  
  useEffect(() => {
    const loadCards = async () => {
      const arr: { img: string; title: string; text: React.ReactNode }[] = [];

      for (let i = 1; i <= 6; i++) {
        const title = String(t(`home.feedback.card${i}.title`));
        const text = t(`home.feedback.card${i}.text`); // mantém ReactNode
        const isMale = String(t(`home.feedback.card${i}.male`)) === "true";

        let imgPath = `/img/${title.replace(/\s+/g, "")}.jpg`;

        try {
          const res = await fetch(imgPath, { method: "HEAD" });
          if (!res.ok) {
            imgPath = isMale ? "/img/nopic_male.svg" : "/img/nopic_female.svg";
          }
        } catch {
          imgPath = isMale ? "/img/nopic_male.svg" : "/img/nopic_female.svg";
        }

        arr.push({ img: imgPath, title, text });
      }

      setCards(arr);
    };

    loadCards();
  }, [t]);

  return (
    <div>
      <BgLeftRoundedFade top={600}>
        <div className={styles.depoimentosTituloGrid}>
          <div className={styles.depoimentosTitulo}>
            {t("home.feedback.title", parentStyles)}
          </div>
          <div className={styles.depoimentosSubtexto}>
            {t("home.feedback.subtext", parentStyles)}
          </div>
        </div>
        <div className={styles.depoimentosGrid}>
          {cards.map((dep, index) => (
            <Depoimento key={index} image={dep.img} title={dep.title}>
              {dep.text}
            </Depoimento>
          ))}
        </div>
      </BgLeftRoundedFade>
    </div>
  );
};

export default Feedbacks;
