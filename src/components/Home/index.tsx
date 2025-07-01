import { Props } from "@/interfaces"
import styles from "./Home.module.css"
import Capa from "./Capa"
import Vantagens from "./Vantagens"
import Objetivos from "./Objetivos"
import Feedbacks from "./Feedbacks"
import Matricula from "./Matricula"

const Home: React.FC<Props> = ({id}) => {
	return (
    <div id={id} className={`${styles.component}`}>
      <Capa />
      <Vantagens />
      <Objetivos />
      <Feedbacks />
      <Matricula />
    </div>
	)
}

export default Home