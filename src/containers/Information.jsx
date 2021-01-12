import React from 'react';

import { Link } from 'react-router-dom';

// styles
import '../styles/components/Information.css';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de Contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" name="name" placeholder="Nombre Completo" />
            <input type="email" name="email" placeholder="Correo" />
            <input type="text" name="address" placeholder="Direccion" />
            <input type="number" name="apto" placeholder="Apto" />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="country" placeholder="Pais" />
            <input
              type="text"
              name="state"
              placeholder="Estado / Departamento"
            />
            <input type="number" name="cp" placeholder="Codigo Postal" />
            <input type="number" name="phone" placeholder="Telefono" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">
            <Link to="/checkout/payment">Pagar</Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h1>Pedido: </h1>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
