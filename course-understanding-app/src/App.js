import './App.css';
import NavbarRef from './Components/NavbarRef';
import CardLayout1 from './Components/CardLayout1';
import ControlledCarousel from './Components/ControlledCarousel';

function App() {

  return (
    <div className="App">
      <NavbarRef/>
      <ControlledCarousel/>
      <br/>
      <CardLayout1/>
    </div>
  );
}

export default App;
