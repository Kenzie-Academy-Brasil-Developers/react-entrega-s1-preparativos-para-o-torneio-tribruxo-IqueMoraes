export function pickingCompetitors(students, setParticipants) {
  let array = [];
  function random() {
    let participant = students[Math.floor(Math.random() * 11)];
    return participant;
  }

  for (let i = 0; array.length < 3; i++) {
    let participant = random();
    if (
      array.every((item) => item.house !== participant.house) ||
      array.length === 0
    ) {
      array.push(participant);
    }
  }
  setParticipants(array);
}
