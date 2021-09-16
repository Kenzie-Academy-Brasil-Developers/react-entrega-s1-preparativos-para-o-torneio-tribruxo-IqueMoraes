import { restart } from "../Restart";
import "./styles.css";

export default function Competitors({
  students,
  participants,
  setParticipants,
}) {
  return (
    <div>
      <div>
        <h2>Bruxos selecionados</h2>
      </div>
      <div className="participants">
        {participants?.map((item) => (
          <div className={`studentCard ${item.house}`}>
            <p>{item.house}</p>
            <img
              className={`image`}
              src={item.image}
              alt={`foto do personagem ${item.name}`}
            />
            <h4>{item.name}</h4>
            <p>{`Varinha: ${item.wand.wood}`}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => restart(students, setParticipants)}>
          REINICIAR TORNEIO
        </button>
      </div>
    </div>
  );
}
