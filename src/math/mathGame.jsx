import React, { Component } from 'react';

function AnswerButton(props) {
  return (
    <button type="submit" className="btn btn-primary" onClick={props.onClick}>Submit</button>
  );
}

function Equation(props) {
  const equation = props.fromCurrent + props.operator + props.toCurrent
  return (
    <h4 className="card-title">
      {equation} =
    </h4>
  )
}

// TODO:
// - set option selection into state
// - figure our how to calculate random questions
// - figure out checking answer

class MathGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCurrent: 1,
      toCurrent: 10,
      operator: '+',
    };
  }

  // handleAnswer(i) {
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   } 
  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  handleAnswer = () => {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // }

    return (
      <div className="card text-center">
        <h4 className="text-danger">Work in Progress</h4>
        <div className="card-header">
          Settings
        </div>
        <div className="card-body row align-items-start">
          <h5 className="card-title">Choose Options</h5>
          <div className="col">
            <p className="card-text">From </p>
            <select className="form-select" aria-label="Default select example">
              <option value="1">1</option>
              <option value="20">10</option>
              <option value="50">20</option>
            </select>
          </div>
          <div className="col">
            <p className="card-text">Operator </p>
            <select className="form-select" aria-label="Default select example">
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">x</option>
              <option value="/">/</option>
            </select>
          </div>
          <div className="col">
            <p className="card-text">Up To </p>
            <select className="form-select" aria-label="Default select example">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <div className="card-body row align-items-start">
          <div className="card-header">
            Question
          </div>
          <Equation
            fromCurrent={this.state.fromCurrent}
            operator={this.state.operator}
            toCurrent={this.state.toCurrent}
          />
          <p>Answer:</p>
          <input className="form-control" id="answer"></input>
          <AnswerButton onClick={this.handleAnswer}/>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default MathGame;
