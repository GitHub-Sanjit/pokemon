import "./App.css";
import Pokecard from "./Pokecard";

function App() {
  return (
    <div className="App">
      <Pokecard id={13} name={"Charmander"} type={"fire"} exp={62}></Pokecard>
    </div>
  );
}

export default App;
