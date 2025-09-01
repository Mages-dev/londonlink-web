import ImageWithPartialFrame from "@/Common/ImageWithPartialFrame"
import { DepoimentoProps } from "@/interfaces"
import styles from "./Depoimento.module.css"

const Depoimento: React.FC<DepoimentoProps> = ({
  image = "",
  title = "",
  children
}) => {
  return (
    
    <div className={`cardDepoimentoContainer ${styles.depoimentoCard}`}>
      <div className={`cardDepoimentoImagem ${styles.depoimentoImage}`}>
        <ImageWithPartialFrame src={image} />
      </div>
      <div className={`cardDepoimentoTextoContainer ${styles.content}`}>
        <div className={`cardDepoimentoTitulo ${styles.title}`}>{title}</div>
        <div className={`cardDepoimentoTexto ${styles.texto}`}>{children}</div>
      </div>
    </div>
	)
}

export default Depoimento