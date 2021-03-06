import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Input = ({success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleSubmit = (event) => {
    setCurrentGuess("");
  }
  
  if(success) {
    return <div data-test='component-input' />
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(e) => handleSubmit(e)}
        >
        Submit
        </button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input;