import "./App.css";
import ButtonComponent from "./components/buttonComponent";
import Header from "./components/header";
import ImageComponent from "./components/imageComponent";
import image from "./image/20231006_144120.jpg";

function App() {
  return (
    <div className="App">
      
        <Header title="React Intro"  style={{color:"black", fontSize:"40px", marginBottom:"20px", backgroundColor:"#D3D3D3", textAlign:"start", display:"flex",justifyContent:"space-between"}} styleDiv={{fontSize:"20px",display:"flex",alignItems:"center"}}></Header>
        <ImageComponent imgLink={image} textInfo="graffiti" style={{width:"250px"}}></ImageComponent>
        <ButtonComponent id="buttonName" buttonText="click me" />
        
      
      
    </div>
  );
}

export default App;