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
    <div className="w-screen min-h-screen overflow-x-hidden text-white scroll-smooth bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900">
      <div className="min-h-screen flex flex-col">
        <CustomCursor />
        <Home />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;