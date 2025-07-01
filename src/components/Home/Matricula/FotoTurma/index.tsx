import styles from "./FotoTurma.module.css"
import Image from "next/image"

const FotoTurma: React.FC = () => {
	return (
    <div className={`${styles.container}`}>
      <div className={`${styles.gradient}`}></div>
      <Image
        className={`${styles.foto}`}
        src={"/img/home-11.png"}
        width={600}
        height={520}
        alt="" />
    </div>
	)
}

export default FotoTurma