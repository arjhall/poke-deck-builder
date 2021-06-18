import React, { useEffect, useState } from 'react'
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import './App.css';

const App = () => {
  const [cards, setCards] = useState<any>([])

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v1/cards')
    .then(response => response.json())
    .then((returnedCards) => {
      setCards(returnedCards.cards)
    })
  }, [])

  return (
    <div className="App">
      <h1>Poke-deck-builder</h1>
      { cards ? cards.map((card: { id: React.Key | null | undefined; imageUrl: string | undefined; number: string | undefined; })=> {
        return <div className='card' key={card.id}>
          <img src={card.imageUrl} alt={card.number}/>
          </div>
      }) : null}
    </div>
  );
}

export default App;