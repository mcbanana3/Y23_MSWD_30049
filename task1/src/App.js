import './App.css';
import Header from './Header'
import Footer from './Footer'
import Faculty from './Faculty';
import Student from './Student';
import Courses from './Courses'
import User from './User'

function App() {
  return (
    <div className="App">
      <Header/>
      <Faculty/>
      <Student/>
      <Courses/>
      <User name = "Aryan" type = "Student"/>
      <User name = "Chenna" type = "Student"/>
      <User name = "Karthik" type = "Faculty"/>
      <Footer/>
    </div>
  );
}

export default App;