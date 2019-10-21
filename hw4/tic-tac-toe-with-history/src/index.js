//help taken from https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './clock';



function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>


      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.StopWatchX = React.createRef();
    this.StopWatchO = React.createRef();

    console.log(this.StopWatchO);
    
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      
      buttonPressed: false

    };
  }

 

  handleClick(i) {

    if(!this.state.xIsNext)
    {
      this.StopWatchO.current.stopTimer();
      this.StopWatchX.current.resetTimer(); 
      this.StopWatchX.current.startTimer(); 
    }
    else
    {
      this.StopWatchX.current.stopTimer();
      this.StopWatchO.current.resetTimer(); 
      this.StopWatchO.current.startTimer(); 
    }
    

    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

   
    if (calculateWinner(squares) || squares[i]) { 
      return;
    }


    squares[i] = this.state.xIsNext ? "X" : "O";
    const stepNumber = history.length;
    history = history.concat([{ squares }]);
    const xIsNext = !this.state.xIsNext;
    this.setState({
      history, stepNumber, xIsNext
    });

    

  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

  
    return (
      <div>
        <div style={{ padding: 20 }}>
          <button style={{ height: "40px", width: "150px" }}>
            <span style={{fontWeight:"bold"}} 
            onClick={() =>{
              this.StopWatchX.current.startTimer()
              this.setState({buttonPressed: true});
              }}>
                PRESS TO START
                </span>
          </button>
        </div>

        <div className="game">
          <div className="game-board" style={{ padding: 20 }} >
             <Board
              squares={current.squares}
              onClick={i => {
                if (this.state.buttonPressed)
                {
                this.handleClick(i)
                }
                else
                {
                  alert('You need to press the start button to start!');
                }
              }}
            />
            
        </div>
        <div className="game-info" style={{paddingRight:30}}>
            <div>{status}</div>
            <ol>{moves}</ol>
        </div>

        <div style={{paddingLeft:30,paddingRight:30, border:"solid 1px"}}>
        <span style={{fontWeight:"bold"}}>Elapsed Time for Player X </span> 
        <StopWatch ref={this.StopWatchX}/>
        </div>

        <div style={{paddingLeft:30,paddingRight:30, border:"solid 1px"}}>
        <span style={{fontWeight:"bold"}}>Elapsed Time for Player O</span>
        <StopWatch ref={this.StopWatchO} />
        </div> 
         
        </div>
        <Clock id="clock1"/>
      </div>
    );
  }
}


class StopWatch extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          timerOn: false,
          timerStart: 0,
          timerTime: 0,

          secondsArray: [],
          average_time: 0
       };
  }


  startTimer = () => {
      this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime
      });

      this.timer = setInterval( () => {
          this.setState({
              timerTime: Date.now() - this.state.timerStart
          })
      })
  }

  stopTimer = () => {
      this.setState({ timerOn: false });
      clearInterval(this.timer);
  }

  resetTimer = () => {
      this.setState({
          timerStart: 0,
          timerTime: 0
      })
  }

  

  render() {

      const { timerTime } = this.state;
      let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
      return (
          <div >
            <p>The time  elapsed = {seconds} second(s) </p>
            
          </div>
      )
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
