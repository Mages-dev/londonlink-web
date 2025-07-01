import parentStyles from "../Home.module.css"
import styles from "./Matricula.module.css"

const Matricula: React.FC = () => {
	return (
    <div className={`${styles.container}`}>
      <div className={`${parentStyles.bold}`}>Faça a sua matrícula:</div>
      <button>Entrar em contato</button>
      <div>Ao clicar no botão acima, você será direcionado para nosso WhatsApp.<br />Mande-nos uma mensagem e continuaremos sua matrícula por lá.</div>
      
    </div>
	)
}

export default Matricula