import styles from "./Navigation.module.css"

const Button = () => {
  return (
    <button className={`${styles.button} h-12 rounded-lg font-bold px-5`}>Pré-matrícula</button>
  );
};
export default Button;