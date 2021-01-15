import React from 'react';
import Header from "./header/header";
import './app.css'
import Basket from "./MainContainer/Basket/basket";
import MainContainer from "./MainContainer/MainContainer";
function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
