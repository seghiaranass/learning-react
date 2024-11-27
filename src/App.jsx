import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer(curActivePlayer => curActivePlayer === "X" ? "O" : "X");
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Plyaer 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Plyaer 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
