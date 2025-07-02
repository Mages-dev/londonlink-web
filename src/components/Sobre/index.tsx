import { Props } from "@/interfaces"
import styles from "./Sobre.module.css"
import Intro from "./Intro"
import Filosofia from "./Filosofia"
import Historia from "./Historia"
import Necessidades from "./Necessidades"
import Metas from "./Metas"

const Contato: React.FC<Props> = ({id}) => {
	return (
    <div id={id} className={styles.component}>
        <Intro />
        <Filosofia />
        <Historia />
        <Necessidades />
        <Metas />
    </div>
	)
}

export default Contato