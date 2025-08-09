import parentStyles from "../Contato.module.css"
import styles from "./Dados.module.css"
import Image from "next/image"
import { useLanguage } from "@/context"

const Dados: React.FC = () => {
	const { t } = useLanguage();
  const handleClick = () => {
    const phoneNumber = "5581979012599";
    const message = String(t("whatsapp.message"));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={styles.component}>
      <div className={styles.block}>
        <div className={parentStyles.bold}>{t("contact.address.title", parentStyles)}</div>
        <div>{t("contact.address.text", parentStyles)}</div>
      </div>
      <div className={styles.block}>
        <div className={parentStyles.bold}>{t("contact.contact.title", parentStyles)}</div>
        <div>
          <a
            href="#"
            target="_blank"
            onClick={handleClick}>
            <Image
              src="/img/icons/WhatsApp.svg"
              width={32}
              height={32}
              alt={`${t("contact.contact.text", parentStyles)}`}
            /></a>+55 (81) 9 7901-2599
        </div>
      </div>
      <div className={styles.block}>
        <div className={parentStyles.bold}>{t("contact.insta", parentStyles)}</div>
        <div>
          <a
            href="https://www.instagram.com/londonlink.school/"
            target="_blank">
            <Image
              src="/img/icons/Instagram.svg"
              width={32}
              height={32}
              alt={`${t("contact.insta", parentStyles)}`} />
          </a>
        </div>
      </div>
		</div>
	)
}

export default Dados