import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MessageList } from "./containers/MessageList"
import { AddMessage } from "./containers/AddMessage"
import { Sidebar } from "./containers/Sidebar"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <section id="main">
          <MessageList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
