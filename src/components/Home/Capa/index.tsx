import BgFadedCircle from "@/Common/BgFadedCircle"
import FotoMulher from "./FotoMulher"
import Titulo from "./Titulo"
import styles from "./Capa.module.css"
import Button from "@/Common/Button";
import { useLanguage } from "@/context";

const Capa: React.FC = () => {
  const { t } = useLanguage();
	return (
    <div className={styles.component}>
      <BgFadedCircle x="-30%" y="5%" radius="320" />
      <BgFadedCircle x="40%" y="-40%" radius="250" />
      <BgFadedCircle x="67%" y="20%" radius="200" />
      <FotoMulher x="47%" y="25%" radius="290" />
      <Titulo />
      <div className={styles.buttonContainer}>
        <Button caption={String(t("home.intro.preregistration"))} invertedColors={true} />
      </div>
    </div>
	)
}

export default Capa