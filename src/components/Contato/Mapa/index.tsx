import styles from './Mapa.module.css'

const Mapa: React.FC = () => {
	return (
    <div>
      <iframe
        className={`${styles.mapa}`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5581289293123!2d-34.89917182433511!3d-8.044407191982764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1970d78f2c29%3A0x15de2a70d1df4d30!2sLondon%20Link!5e0!3m2!1sen!2sbr!4v1751341955309!5m2!1sen!2sbr"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
	)
}

export default Mapa