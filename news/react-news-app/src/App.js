import React from 'react';
import './App.css';
import News from './News'; // News 컴포넌트를 불러옵니다.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React News App</h1>
        <News /> {/* News 컴포넌트를 렌더링합니다. */}
      </header>
    </div>
  );
}

export default App;
