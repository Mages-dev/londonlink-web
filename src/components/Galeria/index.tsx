import { Props } from "@/interfaces"
import styles from "./Galeria.module.css"
import ImageCarousel from '@/Common/ImageCarousel';

const Contato: React.FC<Props> = ({id}) => {
	return (
		<div id={id} className={styles.component}>
			<ImageCarousel />
    </div>
	)
}

export default Contato