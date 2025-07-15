import { Props } from "@/interfaces"
import styles from "./Contato.module.css"
import Mapa from "./Mapa"
import Dados from "./Dados"

const Contato: React.FC<Props> = ({id}) => {
	return (
    <div id={id} className={styles.component}>
      <Mapa />
      <Dados />
    </div>
	)
}

export default Contato