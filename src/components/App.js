import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage'
import Catalog from '../pages/Catalog'
import Person from '../pages/Person'

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={MainPage} exact={true}/>
        <Route path="/catalog" component={Catalog}/>
        <Route path="/person" component={Person}/>
      </Router>
    </div>
  );
}
export default App;
