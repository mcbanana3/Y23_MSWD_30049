import './App.css'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import HomePage from './Components/HomePage'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbar2/>
      <Sidebar/>
      <HomePage/>
    </div>
  );
}

export default App;