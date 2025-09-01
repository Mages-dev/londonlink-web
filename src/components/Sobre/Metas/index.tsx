import parentStyles from "../Sobre.module.css"
import styles from "./Metas.module.css"
import Image from "next/image"
import BgRightRoundedFade from "@/Common/BgRightRoundedFade"
import Button from "@/Common/Button"
import { useLanguage } from "@/context"

const Metas: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={`painelMetas ${styles.component}`}>
			<BgRightRoundedFade top={320}>
				<div className={`painelMetasTitulo tituloComponente bordaTexto ${styles.titulo}`}>{t("about.goals.title", parentStyles)}</div>
				<div className={`painelMetasTexto bordaTexto ${styles.texto}`}>{t("about.goals.text", parentStyles)}</div>
				<div className={`painelMetasContainerBotao ${styles.buttonContainer}`}>
					<Button caption={String(t("about.goals.register"))} />
				</div>
				<div className={`painelMetasContainerImagem ${styles.containerImagem}`}>
					<div className={`painelMetasImagemFrame ${styles.frame}`}></div>
					<Image
						className={`painelMetasImagem ${styles.imagem}`}
						src="/img/about-4.jpg"
						width={450}
						height={600}
						alt=""
					/>
				</div>
			</BgRightRoundedFade>
		</div>
	)
}

export default Metas