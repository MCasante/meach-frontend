import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="app_holder">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
