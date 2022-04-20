import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import { Component } from 'react';
import BindHandlers from './components/BindHandlers';
import Parent from './components/Parent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent />
      </div>

    );
  }
}

export default App;
