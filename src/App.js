import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Helmet} from 'react-helmet';
import { Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';

function App() {
  return (
    <>
      <Helmet>
              <style>{'body { background-image: url(stars_background.jpg); background-position: center;  background-size: span;}'}</style>
      </Helmet>
      <div className="navbar-custom">
        <label className="flex-grow-1 text-size-1 mx-3" htmlFor="">Welcome to my portfolio!</label>
        <Link className="links" to="/">Home</Link>
        |
        <Link className="links" to="/projects">Projects</Link>
        |
        <Link className="links" to="/education">Education</Link>
      </div>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/education" element={<Education/>}/>
      </Routes>
    </>
  );
}

export default App;
