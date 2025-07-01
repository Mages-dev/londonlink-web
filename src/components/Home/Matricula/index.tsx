import Button from "@/Common/Button";
import FotoTurma from "./FotoTurma";
import parentStyles from "../Home.module.css"
import styles from "./Matricula.module.css"
const Matricula: React.FC = () => {
	return (
    <div className={`${styles.container}`}>
      <div className={`${styles.titulo} ${parentStyles.bold}`}>Faça a sua matrícula:</div>
      <div className={styles.buttonContainer}>
        <Button caption="Entrar em contato" />
      </div>
      <div className={styles.subtexto}>Ao clicar no botão acima, você será direcionado para nosso WhatsApp.<br />Mande-nos uma mensagem e continuaremos sua matrícula por lá.</div>
      <FotoTurma />
    </div>
	)
}

export default Matricula