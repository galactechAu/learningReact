import React from 'react';
import CounterExample from './Components/CounterExample'
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-black h-100 text-gray-200">
      <Header/>
      <Footer/>
      <CounterExample />
    </div>
  );
}

export default App;
