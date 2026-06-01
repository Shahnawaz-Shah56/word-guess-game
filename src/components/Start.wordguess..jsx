import React from 'react'
import PropTypes from 'prop-types'

const Start = ({ onPlaying }) => {
  return (
    <div>
      <button onClick={onPlaying}>Play Now</button>
    </div>
  )
}

Start.propTypes = {
  onPlaying: PropTypes.func.isRequired
}

export default Start
