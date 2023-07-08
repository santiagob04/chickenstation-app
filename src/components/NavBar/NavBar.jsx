import "./styles.css"

import { Link } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const Nav = () => {
    const { getNumberOfItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const numberOfItems = getNumberOfItems();
    setTotal(numberOfItems);
  }, [getNumberOfItems]);
    return (
        <nav className="Navigation">
            <h1 className="font-sans text-lg">Chicken Station</h1>
            <ul className="List-ul">

                <Link to="/" className="Link">Inicio</Link>

                <Link to="/about" className="Link">Nosotros</Link>

                <Link to="/contact" className="Link">Contacto</Link>

                <li>
                    <Link to="/products" className="Link menu">Productos</Link>
                    <ul className="submenu">
                        <li><Link to={'/category/pollo'}>Pollo</Link></li>
                        <li><Link to={'/category/milanesas'}>Milanesas</Link></li>
                        <li><Link to={'/category/hamburguesas'}>Hamburguesas</Link></li>
                    </ul>
                </li>
                <Link to="/CartWidget" className="Link">Carrito <strong style={{color:'white',fontFamily:'roboto',fontSize:'16px'}}>{total}</strong> </Link>


            </ul>

        </nav>
    )
}

export default Nav;