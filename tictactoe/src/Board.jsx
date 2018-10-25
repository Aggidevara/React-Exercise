import React from 'react';
import Square from './Square.jsx';
import './Board.css';
export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext:true,
    };
  }

  handleClick(i){
    const squares=this.state.squares.slice();
    if(calculateWinner(squares) || squares[i]){
      
      return;
    }
    squares[i]=this.state.xIsNext ?'X':'O';
    console.log(i);
    this.setState({
      squares:squares,
      xIsNext:!this.state.xIsNext,
    });
  }

  
  renderSquare(i) {
      return (
        <Square key={i}
        value={this.state.squares[i]} 
        className="square" 
        onClick={()=>this.handleClick(i)} />
      );
    }
  
    render() {
    // console.log('checking winner',this.state.squares);
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }
    else{
      status='Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
   

      // const sta='Next player : '+(this.state.xIsNext?'X':'O'); 
      return (
        <div class="board-border">
        <h5>{status}</h5>
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
 
  function calculateWinner(squares){
    const lines=[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // var count=0;
    // let count1=0;
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // console.log("count",count);

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    
      }

    
    return null;
  }
  