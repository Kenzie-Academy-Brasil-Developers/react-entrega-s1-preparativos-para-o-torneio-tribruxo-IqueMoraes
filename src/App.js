import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import HomePage from "./components/HomePage";
import Competitors from "./components/Competitors";

function App() {
  const [students, setStudents] = useState();
  const [participants, setParticipants] = useState();
  const [initialPage, setInitialPage] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((rest) => rest.json())
      .then((rest) => {
        setStudents(rest);
        setParticipants(rest);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {initialPage && (
          <HomePage
            setInitialPage={setInitialPage}
            students={students}
            participants={participants}
            setParticipants={setParticipants}
          />
        )}
        {!initialPage && (
          <Competitors
            students={students}
            participants={participants}
            setParticipants={setParticipants}
          />
        )}
      </header>
    </div>
  );
}

export default App;
