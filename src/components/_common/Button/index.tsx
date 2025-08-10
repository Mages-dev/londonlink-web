import styles from "./Button.module.css"
import { ButtonProps } from "@/interfaces"
import { useLanguage } from "@/context";
const Button: React.FC<ButtonProps> = ({
	caption = "",
	invertedColors = false,
	transparentBackground = false

}) => {
  const { t } = useLanguage();
  const handleClick = () => {
    const phoneNumber = String(t("whatsapp.number"));
    const message = String(t("whatsapp.message"));
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