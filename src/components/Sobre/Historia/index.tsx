import parentStyles from "../Sobre.module.css"
import styles from "./Historia.module.css"
import BgRightRoundedFade from "@/Common/BgRightRoundedFade"
import Image from "next/image"
import { useLanguage } from "@/context"

const Historia: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={`painelHistoria ${styles.component}`}>
			<BgRightRoundedFade top={320}>
				<div className={`tituloPrincipal bordaTexto ${styles.titulo}`}>{t("about.history.title", parentStyles)}</div>
				<div className={`painelHistoriaTexto bordaTexto ${styles.texto}`}>{t("about.history.text", parentStyles)}</div>
				<div className={`painelHistoriaContainerImagem ${styles.containerImagem}`}>
					<div className={`painelHistoriaImagemFrame ${styles.frame}`}></div>
					<Image
						className={`painelHistoriaImagem ${styles.imagem}`}
						src="/img/about-3.jpg"
						width={600}
						height={450}
						alt=""
					/>
				</div>
			</BgRightRoundedFade>
		</div>
	)
}

export default Historia