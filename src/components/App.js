import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './organisms/MainPage'
import CardList from './organisms/CardList'
import Person from './molecules/Person'

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={MainPage} exact={true}/>
        <Route path="/cardList" component={CardList}/>
        <Route path="/person" component={Person}/>
      </Router>
    </div>
  );
}
export default App;
