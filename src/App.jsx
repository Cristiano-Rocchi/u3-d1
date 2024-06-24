import "./App.css";
import ButtonComponent from "./components/buttonComponent";
import ImageComponent from "./components/imageComponent";
import image from "./image/20231006_144120.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ImageComponent imgLink={image} textInfo="graffiti" style={{width:"250px"}}></ImageComponent>
        <ButtonComponent id="buttonName" buttonText="click me" />
        
      </header>
      
    </div>
  );
}

export default App;