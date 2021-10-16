import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage'
import Catalog from '../pages/Catalog'
import Person from '../pages/PersonInfo'
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route path="/" component={MainPage} exact={true}/>
        <Route path="/catalog" component={Catalog}/>
        <Route path="/person/:id" component={Person}/>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
