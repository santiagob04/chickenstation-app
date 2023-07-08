import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Item = ({ product, handleAddToCart, showAs }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          US$ {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Categoria: {product.category}
        </Typography>
      </CardContent>
      { 
   showAs != 'cart' && 
     <CardActions>
      <Button size="small" variant="contained" color="success" onClick={() => handleAddToCart(product)}>Añadir al carrito</Button>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </CardActions>
    }
    </Card>
  );
}

export default Item;
