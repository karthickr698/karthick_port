import React from "react";
import "./App.css";
import "./style.css";
import Home from "../src/Components/Home";
import Projects from "./Components/Projects";
import AOS from "aos";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-178502685-1');
ReactGA.pageview(window.location.pathname + window.location.search);
// ..
AOS.init();

function App() {
  return (
    <div>
      <Home />
      <Projects />
    </div>
  );
}

export default App;
