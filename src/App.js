import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="app_holder">
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
