import React from 'react';

//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';


export default function App() {

return (
  /*  <Router>
      <Routes>
        <nav>
          <Link to="/"> Home</Link>
        </nav>
          <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>*/
    <h1>hello world</h1>
  );
}

function Home(){
  return(
    <div>
      <h1> Welcome home</h1>
    </div>
  );
}
