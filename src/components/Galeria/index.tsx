import { Props } from "@/interfaces"
import styles from "./Galeria.module.css"
import ImageCarousel from '@/Common/ImageCarousel';
import { useLanguage } from "@/context"

const Contato: React.FC<Props> = ({id}) => {
	const { t } = useLanguage();
	return (
		<div id={id} className={styles.component}>
			<div className={`${styles.gradientA}`}></div>
			<div className={`${styles.gradientB}`}></div>
			<div className={`${styles.titulo}`}>{t("gallery.title", styles)}</div>

			<ImageCarousel />
    </div>
	)
}

export default Contato