import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header'
import About from '../src/pages/About'
import Projects from '../src/pages/Projects'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ParticlesBg from 'particles-bg'
import { HashRouter, Link, Switch } from "react-router-dom";
import "./App.css"


function App() {
  return (
    <>
    
    <HashRouter basename='/'>

      <NavBar />
      

      <div>
      <ParticlesBg type="lines" bg={true}  className="Particles"/>
        <Switch>
        
        <Route exact path="/" component={Header} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        </Switch>

        <Footer />
      </div>
    </HashRouter>
</>
  )
}

export default App;
