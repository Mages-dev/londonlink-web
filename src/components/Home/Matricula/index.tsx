import Button from "@/Common/Button";
import FotoTurma from "./FotoTurma";
import parentStyles from "../Home.module.css"
import styles from "./Matricula.module.css"
import { useLanguage } from "@/context";
const Matricula: React.FC = () => {
  const { t } = useLanguage();
	return (
    <div className={`painelMatriculaContainer ${styles.container}`}>
      <div className={`tituloPrincipal bordaTexto ${styles.titulo} ${parentStyles.bold}`}>{t("home.registration.title")}</div>
      <div className={`${styles.buttonContainer}`}>
        <Button caption={String(t("home.registration.preregistration"))} />
      </div>
      <div className={`subtituloPrincipal bordaTexto ${styles.subtexto}`}>{t("home.registration.subtext")}</div>
      <FotoTurma />
    </div>
	)
}

export default Matricula