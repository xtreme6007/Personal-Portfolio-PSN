import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header'
import About from '../src/pages/About'
import Projects from '../src/pages/Projects'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ParticlesBg from 'particles-bg'
import { HashRouter, Link, Switch } from "react-router-dom";



function App() {
  return (
    <>
    <ParticlesBg type="lines" bg={true} />
    <HashRouter basename='/'>

      <NavBar />
      

      <div>
      
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
