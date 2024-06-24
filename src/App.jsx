import "./App.css";
import ButtonComponent from "./components/buttonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent id="buttonName" buttonText="click me" />
      </header>
    </div>
  );
}

export default App;