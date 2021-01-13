import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//utils
import handleSumTotal from '../utils';

// context
import { AppContext } from '../context/AppContext';

// styles
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        {cart.length > 0 ? (
          <h3> Lista de Pedidos: </h3>
        ) : (
            <h3>Sin pedidos...</h3>
          )}
        {cart.map((item) => (
          <div className='Checkout-item' key={item.id}>
            <div className='Checkout-element'>
              <h4>
                {item.title}
                {' '}
                Name
              </h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={handleRemove(item)}>
              <i className='fas fa-trash-alt' />
            </button>
          </div>
        ))}
        {cart.length > 0 && (
          <div className='Checkout-element'>
            <h3 className='total-down'>Precio Total</h3>
            <span>
              <h3>
                {' '}
                {`$ ${handleSumTotal(cart)}`}
              </h3>
            </span>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className='Checkout-sidebar'>
          <h3>
            {' '}
            {`Precio Total:  $ ${handleSumTotal(cart)}`}
          </h3>
          <Link to='/checkout/information'>
            <button type='button'>Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
