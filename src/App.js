import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import AboutMe from './Components/AboutMe'
import ProjectContainer from './Components/ProjectContainer'

function App() {
  return (
    <div className="Main">
      <NavBar />
      <div className="Container">
      <AboutMe />
      
      </div>
<Footer />
    </div>
  );
}

export default App;
