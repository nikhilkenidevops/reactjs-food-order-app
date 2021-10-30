import { useState } from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  function showCartHandler() {
    setcartIsShown(true);
  }

  function hideCartHandler() {
    setcartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
