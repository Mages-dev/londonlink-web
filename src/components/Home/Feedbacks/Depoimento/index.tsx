import ImageWithPartialFrame from "@/Common/ImageWithPartialFrame"
import { DepoimentoProps } from "@/interfaces"
import styles from "./Depoimento.module.css"

const Depoimento: React.FC<DepoimentoProps> = ({
  image = "",
  title = "",
  children
}) => {
  return (
    
    <div className={`${styles.depoimentoCard}`}>
      <div className={styles.depoimentoImage}>
        <ImageWithPartialFrame src={image} />
      </div>
      <div className={styles.content}>
        <div className={`${styles.title}`}>{title}</div>
        <div className={`${styles.texto}`}>{children}</div>
      </div>
    </div>
	)
}

export default Depoimento