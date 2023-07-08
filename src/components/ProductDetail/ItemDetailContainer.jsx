import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../products.json'
function ItemDetailContainer(props) {
  const products = productsData;

  const { id } = useParams();
  const found = products.products.find(element => element.id === parseInt(id));

  return (
    <div>
      <h1>Detalle de producto</h1>

        <div >
          <img src= {found.pictureUrl} alt= {found.name} />
          <h2>Nombre: {found.name}</h2>
          <p>Precio: {found.price}</p>
          <p>Descripcion: {found.description}</p>
        </div>
    
    </div>
  );
}

export default ItemDetailContainer;
