import parentStyles from "../Livros.module.css"
import styles from "./Intro.module.css"
import Image from "next/image"
import { useLanguage } from "@/context"

const Intro: React.FC = () => {
	const { t } = useLanguage();
	return (
		<div className={`painelLivrosIntro ${styles.component}`}>
			<div className={`gradient-esferaGrande`}></div>
			<div className={`gradient-esferaPequena`}></div>
			<div className={`tituloPrincipal ${styles.titulo}`}>{t("books.title", parentStyles)}</div>
			<div className={`painelLivrosIntroContainerImagem ${styles.containerImagem}`}>
				<div className={`painelLivrosIntroImagemFrame ${styles.frame}`}></div>
				<Image
					className={`painelLivrosIntroImagem ${styles.imagem}`}
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