import { Props } from "@/interfaces"
import styles from "./Home.module.css"
import BgFadedCircle from "@/Common/BgFadedCircle"
import FotoMulher from "./FotoMulher"
import Titulo from "./Titulo"
import Vantagens from "./Vantagens"
import Objetivos from "./Objetivos"
import Feedbacks from "./Feedbacks"
import Matricula from "./Matricula"

const Home: React.FC<Props> = ({id}) => {
	return (
    <div id={id} className={`${styles.component}`}>
      <BgFadedCircle x="-30%" y="15%" radius="320" />
      <BgFadedCircle x="40%" y="-25%" radius="250" />
      <BgFadedCircle x="67%" y="30%" radius="200" />
      <FotoMulher x="47%" y="35%" radius="290" />
      <Titulo />
      <Vantagens />
      <Objetivos />
      <Feedbacks />
      <Matricula />
    </div>
	)
}

export default Home