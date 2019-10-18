import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import ColorList from "./components/ColorList";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <ProtectedRoute to="/bubbles" />
      </div>
    </Router>
  );
}

export default App;
