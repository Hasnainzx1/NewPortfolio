// App.js
import './App.css';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import CustomCursor from './components/CustomCursor'

function App() {
  return (

     <>
        <CustomCursor />
        <Home />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
     
</>
  );
}

export default App;