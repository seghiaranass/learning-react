import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player initialName="Plyaer 1" symbol="X" />
        <Player initialName="Plyaer 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
