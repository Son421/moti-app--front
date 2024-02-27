import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import Header from './components/chapters/header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  );
}

export default App;
