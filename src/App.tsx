import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import Header from './components/header/Header';
import UserPage from './pages/userPage/UserPage';
import Routes from './navigation/routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
