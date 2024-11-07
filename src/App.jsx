
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConecpt from "./components/CoreConcept";
import TabButton from "./components/TabButton";
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
