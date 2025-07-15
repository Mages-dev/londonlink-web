import { Props } from "@/interfaces"
import styles from "./Livros.module.css"
import Intro from "./Intro"
import Bloco1 from "./Bloco1"
import Bloco2 from "./Bloco2"

const Livros: React.FC<Props> = ({id}) => {
	return (
        <div id={id} className={styles.component}>
            <Intro />
            <Bloco1 />
            <Bloco2 />
        </div>
    )
}
    
export default Livros