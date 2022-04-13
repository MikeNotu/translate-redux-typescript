import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Counter />
      </header>
    </div>
  );
}

export default App;
