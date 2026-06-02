import React from 'react'
import { useState } from 'react';

const Home = () => {
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
  console.log(guessedLetters)
  setGuessedLetters([...guessedLetters,lowerLetter])
  if(!word.includes(letter)){
    
    setChances(chances - 1)
  }

  
  
}


  return (
  <div>
    {word.split('').every(letter => guessedLetters.includes(letter)) ? (
      <h2>You Win! 🎉</h2>
    ) : chances === 0 ? (
      <h2>You Lose! 😢 Word was: {word}</h2>
    ) : (
      <>
        {word.split('').map((letter, i) => (
          <span className='m-1' key={i}>
            {guessedLetters.includes(letter) ? letter : '_'}
          </span>
        ))}
        <br />
        {alphabets.map((alphabet, i) => (
          <button className='border m-2 p-2' key={i} onClick={() => handleGuess(alphabet)}>
            {alphabet}
          </button>
        ))}
        <h2>chances left: {chances}</h2>
      </>
    )}
  </div>
)}

export default Home 
