import parentStyles from "../Livros.module.css"
import styles from "./Intro.module.css"
import Image from "next/image"
import { useLanguage } from "@/context"

const Intro: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={styles.component}>
			<div className={`${styles.gradientA}`}></div>
			<div className={`${styles.gradientB}`}></div>
			<div className={`${styles.titulo}`}>{t("books.title", parentStyles)}</div>
			<div className={`${styles.containerImagem}`}>
				<div className={`${styles.frame}`}></div>
				<Image
					className={`${styles.imagem}`}
					src="/img/books-1.jpg"
					width={600}
					height={345}
					alt=""
				/>
			</div>
		</div>
	)
}

export default Intro