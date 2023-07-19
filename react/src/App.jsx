import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Instruction from './components/Instruction'

function App() {
  const [ score, setScore ] = useState(0)
  const [ highScore, setHighScore ] = useState(0)
  const [ pokemonList, setPokemonList ] = useState([])
  const [ cards, setCards ] = useState([])
  let api = false;

  const checkScore = () => {
    if (score > highScore) {
      setHighScore(score)
    }
  }

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5)
  }

  const clickCard = (e) => {
    if (cards.includes(e.target.id)) {
      setScore(0)
      setCards([])
      checkScore()
    } else {
      setCards(x => [...x, e.target.id])
      setScore(score + 1)
      shuffle(pokemonList)
    }
    console.log(cards)
  }

  useEffect(() => {
    if (score === 16) {
      setHighScore(score)
      setScore(0)
      setCards([])
      alert('You clicked them all!')
    }
  }, [score])

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
      <Card clickCard={clickCard} pokemonList={pokemonList} />
    </div>
  )
}

export default App
