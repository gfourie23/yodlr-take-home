import React from "react"
import MyRoutes from "./MyRoutes"
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'


function App() {
  return (
    <Router>
      <MyRoutes />
    </Router>
  )
}

export default App;
