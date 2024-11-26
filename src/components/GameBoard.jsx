import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
    const [gameBoard,setGameBoard] = useState(initialGameboard);

    function handleSelectSquare(rowIndex,colIndex){
        
        setGameBoard((prevGameBoard) =>{
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];

            updateBoard[rowIndex][colIndex] = 'X';
            return updateBoard
        })
    }


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>{
                    handleSelectSquare(rowIndex,colIndex)
                }}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
