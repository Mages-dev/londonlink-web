import { Props } from "@/interfaces"
import styles from "./Contato.module.css"
import Mapa from "./Mapa"

const Contato: React.FC<Props> = ({id}) => {
	return (
    <div id={id} className={styles.component}>
      <Mapa />
    </div>
	)
}

export default Contato