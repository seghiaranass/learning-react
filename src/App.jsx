import {useState} from 'react';

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConecpt from "./components/CoreConcept";
import TabButton from "./components/TabButton";



function App() {
  const [selectedTopic,setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)

  }

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
            <TabButton onSelect={()=>{handleSelect("Components")}}>Components</TabButton>
            <TabButton onSelect={()=>{handleSelect("JSX")}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect("Props")}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect("State")}}>State</TabButton>
          </menu>

          {selectedTopic}




        </section>
      </main>
    </div>
  );
}

export default App;
