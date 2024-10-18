import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInit(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInit(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConecpt(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}  />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConecpt title="Components" description="The core UI building block" image={componentsImg}/>
            <CoreConecpt title="Components" description="The core UI building block" image={componentsImg}/>
            <CoreConecpt title="Components" description="The core UI building block" image={componentsImg}/>
            <CoreConecpt title="Components" description="The core UI building block" image={componentsImg}/>

          </ul>
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
