import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';

import Cart from './common/Cart/Cart';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import Pages from './pages/Pages';

import Allproducts from './pages/All-Products/Allproducts';
import Contact from './pages/Contact/Contact';
import Register from './pages/Login-page/Register';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';

import Data from './components/flashDeals/Data';
import Sdata from './components/shop/Sdata';
import Pdata from './pages/All-Products/All-product-data';

import ScroolTop from './common/scroolTop/scroolTop';

import PayPal from './common/Payment/Payment';


function App() {

  const { productItems } = Data
  const { shopItems } = Sdata
  const { allproduct } = Pdata


  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCardItem(cartItem.map((item) =>
      (item.id === product.id ?
        { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }


  return (
    <>

      <ScroolTop />

      <Router>
        <Header cartItem={cartItem} />
        <Switch>

          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>

          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>

          <Route path="/fashion" exact>
            <Men allproduct={allproduct} addToCart={addToCart} />
          </Route>

          <Route path="/organic_productes" exact>
            <Women />
          </Route>

         

          <Route path="/all-products" exact>
            <Allproducts allproduct={allproduct} addToCart={addToCart} />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

            <Route path="/register" exact>
            <Register/>
          </Route>

          <Route path="/payment" exact>
          <PayPal />
        </Route>
         
        

        </Switch>

        <Footer />
        
      </Router>



    </>
  );
}

export default App;















