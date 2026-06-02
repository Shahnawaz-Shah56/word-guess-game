import React from 'react'
// import PropTypes from 'prop-types'

const Start = ({ onPlaying }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-400 to-blue-500'>
      <div className='bg-white p-12 rounded-lg shadow-2xl text-center'>
        <h1 className='text-5xl font-bold mb-6 text-purple-600'>Word Guess Game</h1>
        <p className='text-xl text-gray-600 mb-8'>Guess the word before you run out of chances!</p>
        <p className='text-lg text-gray-500 mb-8'>You have 6 chances to guess the correct word</p>
        <button 
          onClick={onPlaying}
          className='bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-xl hover:from-purple-600 hover:to-blue-600 transition'
        >
          Play Now
        </button>
      </div>
    </div>
  )
}

Start.propTypes = {
  // onPlaying: PropTypes.func.isRequired
}

export default Start
