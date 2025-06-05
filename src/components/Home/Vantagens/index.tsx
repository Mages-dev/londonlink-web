import styles from "../Home.module.css"
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade"
import SmallCard from "@/components/_common/SmallCard"

const Vantagens: React.FC = () => {
	return (
    <div className={styles.vantagensContainer}>
      <BgLeftRoundedFade top={320}>
        <span className={`${styles.bold}`}>Algumas de suas vantagens</span><br />
        como aluno incluem:
        <div className={styles.cardsContainer}>
          <SmallCard title="Aulas Personalizadas" icon="home-ap">
            Estude de acordo com as suas necessidades e objetivos pessoais.
          </SmallCard>
          <SmallCard title="Forme Sua Turma" icon="home-ft">
            Aulas em dupla, trio, grupo ou individuais. Você escolhe.
          </SmallCard>
          <SmallCard title="Equipe Rotativa" icon="home-er">
            Interaja com professores diferentes a cada aula.
          </SmallCard>
          <SmallCard title="Horários Flexíveis" icon="home-hf">
            Alinhe as suas aulas com a sua agenda.
          </SmallCard>
          <SmallCard title="Certificado de Proficiência" icon="home-cp">
            Garantia de certificado comprovando fluência no idioma.
          </SmallCard>
        </div>
      </BgLeftRoundedFade>
    </div>
	)
}

export default Vantagens