import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Grid } from '@mui/material';
import Item from '../Item/Item';

const CartWidget = () => {
  const { cartItems,getNumberOfItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const numberOfItems = getNumberOfItems();
    setTotal(numberOfItems);
  }, [getNumberOfItems]);
  return (
    <div>
      <h2>Carrito de compras</h2>
      <span>Total de productos en el carrito: {total}</span>
      <ul>
        {cartItems.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
             
          <Item
            product={product}
            showAs="cart"
          />
        </Grid>
        ))}
      </ul>
      <button>Finalizar compra</button>
    </div>
  );
}

export default CartWidget;
