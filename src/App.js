import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header'
import About from '../src/pages/About'
import Projects from '../src/pages/Projects'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ParticlesBg from 'particles-bg'



function App() {
  return (
   
    
    <Router>
       <ParticlesBg type="lines" bg={true} />
    <NavBar />
      <div className="Container Main"> 
       
        
          <Route exact path="#" component={Header} />
          <Route exact path="#about" component={About} />
          <Route exact path="#projects" component={Projects} />
          
        
        <Footer />
      </div>
    </Router>
    
  )
}

export default App;
