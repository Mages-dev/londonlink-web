import { BgCircleProps } from "@/interfaces"
import BgGradientCircle from "@/Common/BgGradientCircle"
import styles from "./FotoMulher.module.css"

const FotoMulher: React.FC<BgCircleProps> = ({ x = "0", y = "0", radius = "290"}) => {
	return (
    <div className={`${styles.principalContainer}`}>
      <div
        className={`${styles.principal}`}
        style={{
          '--x': x,
          '--y': y,
          '--radius': radius,
        } as React.CSSProperties}
      >
        <BgGradientCircle radius={radius} />
        <div className={`${styles.fotoPrincipal}`}></div>
      </div>
    </div>
	)
}

export default FotoMulher