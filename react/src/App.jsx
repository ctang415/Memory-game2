import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Instruction from './components/Instruction'

function App() {
  const [ score, setScore ] = useState(0)
  const [ highScore, setHighScore ] = useState(0)
  const [ pokemonList, setPokemonList ] = useState([])
      let api = false;

  const checkScore = () => {
    if (score > highScore) {
      setHighScore(score)
    }
  }


  useEffect(() => {
    if (!api) {
    const grabApi = async () => {
    const fetchPokemon = async (pokemon) => {
      let url = pokemon.url
      let x = await fetch(url).then(response => response.json())
      setPokemonList(p => [...p, { name: x.name, image: x.sprites.front_default } ])
    }
    let data = await fetch(('https://pokeapi.co/api/v2/pokemon/?limit=16'), {mode: 'cors'}).then(response => response.json())
    data.results.forEach(element => fetchPokemon(element))
  }
  grabApi()
  }
  return () => {
    api = true
  }
}, [])
  

  return (
    <div className='app'>
      <Instruction score={score} highScore={highScore} />
      <Card pokemonList={pokemonList} />
    </div>
  )
}

export default App
