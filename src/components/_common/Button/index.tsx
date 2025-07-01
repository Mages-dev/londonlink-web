import styles from "./Button.module.css"
import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({
	caption = "",
	invertedColors = false,
	transparentBackground = false

}) => {
  const handleClick = () => {
    const phoneNumber = "5581979012599";
    const message = "Olá, gostaria de informações sobre a pré-matrícula na London Link!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const style = invertedColors && transparentBackground ? styles.invertedTransparentButton :
    !invertedColors && transparentBackground ? styles.transparentButton :
      invertedColors && !transparentBackground ? styles.invertedButton :
        styles.button;

  return (
    <button
      onClick={handleClick}
      className={`${styles.base} ${style} h-12 rounded-lg font-bold px-5`}>{caption}</button>
  );
};
export default Button;