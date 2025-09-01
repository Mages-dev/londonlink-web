import { Props } from "@/interfaces"
import styles from "./Galeria.module.css"
import ImageCarousel from '@/Common/ImageCarousel';
import { useLanguage } from "@/context"

const Contato: React.FC<Props> = ({id}) => {
	const { t } = useLanguage();
	return (
		<div id={id} className={`painelGaleria ${styles.component}`}>
			<div className={`gradient-esferaGrande`}></div>
			<div className={`gradient-esferaPequena`}></div>
			<div className={`tituloPrincipal ${styles.titulo}`}>{t("gallery.title", styles)}</div>

			<ImageCarousel />
    </div>
	)
}

export default Contato