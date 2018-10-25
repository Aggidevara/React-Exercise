import React from 'react';
import Board from './Board.jsx';
import './Game.css';
import './Board.css';
export default class Game extends React.Component {
 
    render() {
        // const status = 'Next player: X';
      return (
        <div id="game">
          <div id="game-board">
            <div id="head">Ultimate Tic Tac Toe</div>
                <div className="mainboard">
                    <Board className="board"></Board>
                    <Board className="board"></Board>
                    <Board className="board"></Board>
                </div>
           
                <div className="mainboard">
                    <Board className="board"></Board>
                    <Board className="board"></Board>
                    <Board className="board"></Board>
                    </div>
                <div className="mainboard">
                    <Board className="board"></Board>
                    <Board className="board"></Board>
                    <Board className="board"></Board>
                </div>
            </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        
        </div>
      );
    }
  }
  