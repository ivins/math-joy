import React, { Component } from 'react';
import Board from './ticTacToe/ticTacToeGame.jsx'
import MathGame from './math/mathGame.jsx'

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="container">
          <Board />
          <br/>
          <br/>
          <hr/>
          <MathGame/>
        </div>
      </div>
    );
  }
}

export default Game;
