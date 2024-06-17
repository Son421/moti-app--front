import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import Header from './components/header/Header';
import Routes from './navigation/routes';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
