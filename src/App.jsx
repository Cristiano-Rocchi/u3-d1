import "./App.css";
import ButtonComponent from "./components/buttonComponent";
import ImageContent from "./components/imageComponent";
import image from "./image/20231006_144120.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageContent imgLink={image} textInfo="graffiti" style={{width:"250px"}}></ImageContent>
        <ButtonComponent id="buttonName" buttonText="click me" />
        
      </header>
      
    </div>
  );
}

export default App;