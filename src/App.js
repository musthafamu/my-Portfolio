import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Spline from './components/Spline';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Spline/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
     
    </div>
  );
}

export default App;
