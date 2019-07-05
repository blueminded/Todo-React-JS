import React from 'react';
import './App.css';
import Todo from './todo.js';
import Login from './login.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ProtectedRoute} from './protected-route.js'
function App() {
  return (
    
    <div className="App">
      
        <Router>
        <Switch>
            <ProtectedRoute exact path="/" component={Todo} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={()=> "Página no encontrada"} />
          </Switch>  
        </Router>
      
    </div>
  );
}

export default App;
