import { act, useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare,activePlayerSymbol}) {
    const [gameBoard,setGameBoard] = useState(initialGameboard);

    function handleSelectSquare(rowIndex,colIndex){
        
        setGameBoard((prevGameBoard) =>{
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];

            updateBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateBoard
        })
      
        onSelectSquare();
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
