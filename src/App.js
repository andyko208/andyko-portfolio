import React from 'react';
import './App.css';
import Home from './contents/Home'
import Education from './contents/Education';
import Projects from './contents/Projects';
import Skills from './contents/Skills';
import
{
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <Home />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
      </div>
    </Router>
  )
}
export default App;
