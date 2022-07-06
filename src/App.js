import './App.css'; 
import React, { useEffect, useState } from 'react';
import { GetCharacter, GetPeople } from './components/people'

function App() {
  const [people, setPeople] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(1);
  const [details, setDetails] = useState({});

  useEffect(() => {
      GetPeople()
          .then(setPeople).catch('error')
  }, [])

  useEffect(() => {
    GetCharacter(currentCharacter).then(setDetails).catch('error')
  }, [currentCharacter])

  function showDetails(character) {
    const id = Number(character.url.split("/").slice(-2)[0])
    setCurrentCharacter(id)
  }
  
  return (
    <React.Fragment>
    <p>There you have...</p>
    <ul>
      {people?.results?.map((character) => (
        <li className="character"key={character.name} onClick={() => showDetails(character)}>{character.name}</li>
      ))}
    </ul>
    {details && (
      <aside>
      <h1>{details.name}</h1>
      <hr />
      <ul>
        <li>Height: {details.height} cm</li>
        <li>Gender: {details.gender}</li>
      </ul>
      </aside>
      
    )}
    </React.Fragment>
  );
}

export default App;
