import { useState, useEffect } from 'react';

import Pokemon from './Pokemon';

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=200')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, [])

  return (
    <div className="App">
      <main>
        {pokemons.map(pokemon => <Pokemon data={pokemon} />)}
      </main>
    </div>
  );
}

export default App;
