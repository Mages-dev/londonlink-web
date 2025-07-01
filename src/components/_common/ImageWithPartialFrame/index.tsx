import Image from 'next/image';
import { ImgProps } from "@/interfaces"
import styles from "./ImageWithPartialFrame.module.css"

const ImageWithPartialFrame: React.FC<ImgProps> = ({
  src = ""
}) => {

  return (
    <div className={`${styles.container}`}>
      <Image
        className={`${styles.picture}`}
        src={src}
        width={400}
        height={600}
        alt=''
      />
    </div>
  );
};

export default ImageWithPartialFrame;