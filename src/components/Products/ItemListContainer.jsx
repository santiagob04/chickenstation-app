import { useState, useEffect, useContext } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore"
import { CartContext } from "../../context/CartContext";
import { getAllProducts } from "../../utils/firebaseFetching";
import Item from "../Item/Item";
import Grid from "@mui/material/Grid";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();
  const productsByCategory = [];
  const { cartItems, addToCart} = useContext(CartContext);
  
  //Agregar un producto al carrito
const handleAddToCart = (product) => {
  addToCart(product);
};

const fetchProducts = async () => {

  setLoading(true);
  const data = await getAllProducts()
  if(categoryName){
    
    const productsByCategory = data.filter(product => product.category.toLowerCase() === categoryName)
   setProducts(productsByCategory)
  }else{
    setProducts(data)
  }
  
  setLoading(false);

};

useEffect(() => {
  fetchProducts()
}, [setProducts]);
return (
  <>
    {loading ? (
      <span>Cargando productos ...</span>
    ) : (
      <div>
        <h1>Nuestros productos!</h1>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
             
              <Item
                product={product}
                handleAddToCart={handleAddToCart}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )}
  </>
);
}

export default ItemListContainer;