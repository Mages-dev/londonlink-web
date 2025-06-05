import styles from "../Home.module.css"

const Titulo: React.FC = () => {
	return (
    <div className={`${styles.textBlock}`}>
      <h1 className={`${styles.h1} ${styles.shadow}`}>Você quer<br />aprender <span className={`${styles.bold}`}>inglês?</span></h1>
      <p className={`${styles.paragrafo}`}>Diga-nos o que você precisa<br />e criaremos um curso só para você!</p>
    </div>
	)
}

export default Titulo