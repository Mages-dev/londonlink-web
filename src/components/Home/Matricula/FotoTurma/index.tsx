import styles from "./FotoTurma.module.css"
import Image from "next/image"

const FotoTurma: React.FC = () => {
	return (
    <div className={`fotoTurmaContainer ${styles.container}`}>
      <div className={`gradient-topdown`}></div>
      <Image
        className={`fotoTurmaImagem ${styles.foto}`}
        src={"/img/home-11.png"}
        width={600}
        height={520}
        alt="" />
    </div>
	)
}

export default FotoTurma