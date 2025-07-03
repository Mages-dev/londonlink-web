import parentStyles from "../Sobre.module.css"
import styles from "./Intro.module.css"
import Image from "next/image"
import { useLanguage } from "@/context"

const Intro: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={styles.component}>
			<div className={`${styles.gradientA}`}></div>
			<div className={`${styles.gradientB}`}></div>
			<div className={`${styles.titulo}`}>{t("about.intro.title", parentStyles)}</div>
			<div className={`${styles.containerImagem}`}>
				<div className={`${styles.frame}`}></div>
				<Image
					className={`${styles.imagem}`}
					src="/img/about-1.jpg"
					width={600}
					height={600}
					alt=""
				/>
			</div>
		</div>
	)
}

export default Intro