import parentStyles from "../Livros.module.css"
import styles from "./Bloco2.module.css"
import BgRightRoundedFade from "@/Common/BgRightRoundedFade"
import Image from "next/image"
import { useLanguage } from "@/context"

const Bloco2: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={`painelLivrosBloco2 ${styles.component}`}>
			<BgRightRoundedFade top={320}>
				<div className={`painelLivrosBloco2Texto bordaTexto ${styles.texto}`}>{t("books.block2", parentStyles)}</div>
				<div className={`painelLivrosBloco2ContainerImagem ${styles.containerImagem}`}>
					<div className={`painelLivrosBloco2ImagemFrame ${styles.frame}`}></div>
					<Image
						className={`painelLivrosBloco2Imagem ${styles.imagem}`}
						src="/img/books-3.jpg"
						width={500}
						height={500}
						alt=""
					/>
				</div>
			</BgRightRoundedFade>
		</div>
	)
}

export default Bloco2