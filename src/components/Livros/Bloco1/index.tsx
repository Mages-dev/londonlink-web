import parentStyles from "../Livros.module.css"
import styles from "./Bloco1.module.css"
import Image from "next/image"
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade"
import { useLanguage } from "@/context"

const Bloco1: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={styles.component}>
			<BgLeftRoundedFade top={320}>
				<div className={`${styles.texto}`}>{t("books.block1", parentStyles)}</div>
				<div className={`${styles.containerImagem}`}>
					<div className={`${styles.frame}`}></div>
					<Image
						className={`${styles.imagem}`}
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