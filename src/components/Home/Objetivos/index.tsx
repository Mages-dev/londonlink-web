import styles from "../Home.module.css"
import BgRightRoundedFade from "@/Common/BgRightRoundedFade"
import ImageCard from "@/Common/ImageCard"

const Objetivos: React.FC = () => {
	return (
    <div className={styles.objetivosContainer}>
      <BgRightRoundedFade top={580}>
        <div className={styles.titlesContainer}>
          <div className={styles.mainTitle}>
          Diga-nos exatamente quais são<br />
          os seus objetivos e <span className={`${styles.bold}`}>criaremos<br />um curso só para você!</span>
          </div>
          <div className={styles.secondaryTitle}>
          Estamos prontos para projetar um curso totalmente<br />
          voltado para as suas necessidades específicas!
          </div>
        </div>

        <div className={styles.imageCardsContainer}>
          <ImageCard image="/img/home-2.png" caption="Começando do início?" />
          <ImageCard image="/img/home-3.png" caption="Deseja praticar conversação?" />
          <ImageCard image="/img/home-4.png" caption="Inglês para negócios?" />
          <ImageCard image="/img/home-5.png" caption="Vai viajar e precisa de inglês?" />
          <ImageCard image="/img/home-6.png" caption="Estudando para algum exame?" />
        </div>
      </BgRightRoundedFade>
    </div>
	)
}

export default Objetivos