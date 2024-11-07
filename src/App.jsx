
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConecpt from "./components/CoreConcept";

function App() {
  return (
    <div>
      <Header />
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConecpt {...CORE_CONCEPTS[0]}/>
            <CoreConecpt {...CORE_CONCEPTS[1]}/>
            <CoreConecpt {...CORE_CONCEPTS[2]}/>
            <CoreConecpt {...CORE_CONCEPTS[3]}/>


          </ul>
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
