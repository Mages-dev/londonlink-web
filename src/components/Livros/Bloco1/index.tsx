import parentStyles from "../Livros.module.css"
import styles from "./Bloco1.module.css"
import Image from "next/image"
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade"
import { useLanguage } from "@/context"

const Bloco1: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={`painelLivrosBloco1 ${styles.component}`}>
			<BgLeftRoundedFade top={320}>
				<div className={`painelLivrosBloco1Texto bordaTexto ${styles.texto}`}>{t("books.block1", parentStyles)}</div>
				<div className={`painelLivrosBloco1ContainerImagem ${styles.containerImagem}`}>
					<div className={`painelLivrosBloco1ImagemFrame ${styles.frame}`}></div>
					<Image
						className={`painelLivrosBloco1Imagem ${styles.imagem}`}
						src="/img/books-2.jpg"
						width={500}
						height={450}
						alt=""
					/>
				</div>
			</BgLeftRoundedFade>
		</div>
	)
}

export default Bloco1