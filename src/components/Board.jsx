import React from 'react';
import Square from './Square';

class Board extends React.Component{

  renderSquare(num) {
    return <Square value={num}/>;
  }

  render(){
    const status = 'Next player: X';
    const boardStyle = {
      boxSizing: 'border-box',
      backgroundColor: 'lavender',
    };

    return(
      <div style={boardStyle}>

        <div className="status">{status}</div>
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
export default Board;
