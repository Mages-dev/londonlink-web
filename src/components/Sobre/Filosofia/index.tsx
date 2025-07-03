import parentStyles from "../Sobre.module.css"
import styles from "./Filosofia.module.css"
import Image from "next/image"
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade"
import { useLanguage } from "@/context"

const Filosofia: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={styles.component}>
			<BgLeftRoundedFade top={320}>
				<div className={`${styles.titulo}`}>{t("about.phylosophy.title", parentStyles)}</div>
				<div className={`${styles.texto}`}>{t("about.phylosophy.text", parentStyles)}</div>
				<div className={`${styles.containerImagem}`}>
					<div className={`${styles.frame}`}></div>
					<Image
						className={`${styles.imagem}`}
						src="/img/about-2.jpg"
						width={600}
						height={450}
						alt=""
					/>
				</div>
			</BgLeftRoundedFade>
		</div>
	)
}

export default Filosofia