import { pickingCompetitors } from "../PickingCompetitors";

export function restart(students, setParticipants) {
  setParticipants([]);

  pickingCompetitors(students, setParticipants);
}
