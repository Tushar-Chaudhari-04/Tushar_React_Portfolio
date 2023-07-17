import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Experience from "./pages/experience/Experience"
import Projects from "./pages/projects/Projects"
import Skills from "./pages/skills/Skills"
import Contact from "./pages/contact/Contact"

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
