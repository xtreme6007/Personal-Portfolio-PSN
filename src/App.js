import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from '../src/pages/About'
import Projects from '../src/pages/Projects'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";



function App() {
  return (
   
    
    <Router>
    <NavBar />
      <div className="Container Main"> 
       
        
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          
        
        <Footer />
      </div>
    </Router>
    
  )
}

export default App;
