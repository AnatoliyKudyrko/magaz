import React from 'react';
import Header from "./header/header";
import './app.css'
import Basket from "./MainContainer/Basket/basket";
import MainContainer from "./MainContainer/MainContainer";
import Footer from "./footer/footer";
function App() {
  return (
    <div>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
