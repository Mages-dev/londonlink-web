import parentStyles from "../Home.module.css";
import styles from "./Feedbacks.module.css";
import BgLeftRoundedFade from "@/Common/BgLeftRoundedFade";
import Depoimento from "./Depoimento";

const Feedbacks: React.FC = () => {
  return (
    <div>
      <BgLeftRoundedFade top={600}>
        <div className={styles.depoimentosTituloGrid}>
          <div className={styles.depoimentosTitulo}><span className={parentStyles.bold}>Feedback</span><br />dos alunos</div>
          <div className={styles.depoimentosSubtexto}>Confira o que alguns dos nossos alunos estão falando sobre nossas aulas!</div>
        </div>
        <div className={styles.depoimentosGrid}>
          <Depoimento image="/img/home-7.jpg" title="Michelle Medeiros">
            Eu sempre quis aprender inglês para facilitar a comunicação nas minhas viagens, tentei fazer alguns cursos mas não aprendi muito. Conheci Jay através da minha cunhada e irmã que já faziam o curso e amavam.
            <br />
            <br />
            Na LondonLink eu me senti parte de uma família em que amigos me ensinavam inglês. As aulas são interativas, dinâmicas e sempre diferentes.
          </Depoimento>
          <Depoimento image="/img/home-8.jpg" title="Henrique Menezes">
            A LondonLink é uma escola de inglês moderna que se adapta perfeitamente às necessidades de cada aluno. Gosto especialmente de sua flexibilidade e abordagem personalizada.
          </Depoimento>
          <Depoimento image="/img/home-9.jpg" title="Rodolpho Niceto">
            O método de ensino é realmente um grande diferencial, combinando conversas dinâmicas com a parte gramatical de forma leve e eficiente. Além disso, a interação com diferentes professores ao longo do curso tem sido essencial.
          </Depoimento>
          <Depoimento image="/img/home-10.jpg" title="Ayla Reis">
            Estudar na London Link foi um divisor de águas para o meu inglês. Antes, meu inglês era travado e eu não tinha confiança para ter uma conversa básica. Agora, me sinto preparada para conversar com qualquer pessoa.
          </Depoimento>
        </div>
      </BgLeftRoundedFade>
    </div>
  );
};

export default Feedbacks;
