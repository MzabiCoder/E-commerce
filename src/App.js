import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import List from './components/List'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'
import {Switch,Route} from 'react-router-dom'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
       <React.Fragment>
       <Navbar/>
       <Switch>
       <Route path="/" exact component={List}/>
       <Route path="/details" component={Details}/>
       <Route path="/cart" component={Cart}/>
       <Route  component={Default}/>
     </Switch>
     <Modal/>
     </React.Fragment>

    );
  }
}

export default App;
