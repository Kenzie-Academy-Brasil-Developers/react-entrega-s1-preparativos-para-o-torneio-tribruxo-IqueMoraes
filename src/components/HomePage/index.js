import { pickingCompetitors } from "../PickingCompetitors";
import Varinha from "../../img/varinha.png";
import "./styles.css";

export default function HomePage({
  setInitialPage,
  students,
  setParticipants,
}) {
  return (
    <div>
      <h3>Bem-vinde ao Torneio Tribruxos!</h3>
      <h4>
        Para selecionar os participantes e dar início aos jogos clique na
        varinha.
      </h4>
      <div className="backgorundFigure">
      <figure
        onClick={() => {
          console.log("yes");
          setInitialPage(false);
          pickingCompetitors(students, setParticipants);
        }}
      >
        <img
          className="wand"
          src={Varinha}
          alt="imagem de uma varinha de madeira"
        />
      </figure>
      </div>
    </div>
  );
}
