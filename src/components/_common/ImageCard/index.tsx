import styles from "./ImageCard.module.css"
import { ImageCardProps } from '@/interfaces'

const ImageCard: React.FC<ImageCardProps> = ({ caption = "No title", image = "error" }) => {
  return (
    <div className={`imageCard ${styles.card}`}>
      <div
        className={`imagemImageCard ${styles.image}`}
        style={{
          backgroundImage: `url(${image})`,
        } as React.CSSProperties}
      />
      <div className={`textoImageCard ${styles.caption}`}>{caption}</div>
    </div>
  );
};

export default ImageCard;