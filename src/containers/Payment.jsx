import React, { useContext } from 'react';

// paypal button
import { PayPalButton } from 'react-paypal-button';

// context
import { AppContext } from '../context/AppContext';

// utils
import handleSumTotal from '../utils';

// styles
import '../styles/components/Payment.css';

const Payment = ({ history }) => {

  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: 'AfyxHsktmXhEGCR1Zxu87KemE8DNfmp8ocZIixEu-g0_sZbXcRBjbq8H-vNvbjz4TST9m2tJAc62Es9Z',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido: </h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.id}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
