import React from 'react'
import { useState } from 'react';

const Home = ({ onGameEnd }) => {
    const wordsArr = [
  "mountain", "river", "cloud", "forest", "desert",
  "lion", "tiger", "eagle", "shark", "dolphin",
  "computer", "keyboard", "screen", "phone", "camera",
  "music", "dance", "poetry", "painting", "drama",
  "city", "village", "castle", "island", "bridge",
  "hope", "dream", "courage", "wisdom", "freedom"
];

const [word] = useState(wordsArr[Math.floor(Math.random()*wordsArr.length)])

const [guessedLetters, setGuessedLetters] = useState([])
const [chances, setChances] = useState(6)
const alphabets = ["A", "B", "C", "D", "E", "F", "G", 
             "H", "I", "J", "K", "L", "M", "N", 
             "O", "P", "Q", "R", "S", "T", "U", 
             "V", "W", "X", "Y", "Z"]

const handleGuess = (letter)=>{
   const lowerLetter = letter.toLowerCase()
  if(guessedLetters.includes(lowerLetter)) return
  setGuessedLetters([...guessedLetters,lowerLetter])
  if(!word.includes(lowerLetter)){
    setChances(chances - 1)
  }
}


const isGameWon = word.split('').every(letter => guessedLetters.includes(letter))
  const isGameLost = chances === 0

  return (
  <div className='p-8'>
    <h1 className='text-3xl mb-8'>Word Guess Game</h1>
    {isGameWon ? (
      <div className='text-center'>
        <h2 className='text-2xl mb-4'>You Win! 🎉</h2>
        <button className='border p-3 bg-green-500 text-white' onClick={onGameEnd}>
          Play Again
        </button>
      </div>
    ) : isGameLost ? (
      <div className='text-center'>
        <h2 className='text-2xl mb-4'>You Lose! 😢 Word was: {word}</h2>
        <button className='border p-3 bg-red-500 text-white' onClick={onGameEnd}>
          Try Again
        </button>
      </div>
    ) : (
      <>
        <div className='mb-6'>
          {word.split('').map((letter, i) => (
            <span className='m-1 text-2xl font-bold' key={i}>
              {guessedLetters.includes(letter) ? letter : '_'}
            </span>
          ))}
        </div>
        <div className='mb-4'>
          {alphabets.map((alphabet, i) => {
            const isGuessed = guessedLetters.includes(alphabet.toLowerCase())
            return (
              <button 
                className={`border m-2 p-2 ${isGuessed ? 'bg-gray-300 cursor-not-allowed' : 'bg-white hover:bg-blue-100'}`}
                key={i} 
                onClick={() => handleGuess(alphabet)}
                disabled={isGuessed}
              >
                {alphabet}
              </button>
            )
          })}
        </div>
        <h2 className='text-xl'>Chances left: {chances}</h2>
      </>
    )}
  </div>
)}

export default Home 
