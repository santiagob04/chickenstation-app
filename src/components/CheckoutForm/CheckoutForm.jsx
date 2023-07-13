import React from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import { addNewOrder } from '../../utils/firebaseFetching';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Button, TextField } from '@mui/material';

const CheckoutForm = ({ setId }) => {
  const { products } = useContext(CartContext);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: async (values) => {
      const orderId = await addNewOrder(values);
      console.log(orderId)
      // setId(orderId);
      resetForm({ values: "" });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>


        <TextField type='text' id="firstName" label="Nombre" name="firstName" variant="outlined" size='small' value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />


        <TextField type='text' id="lastName" label="Apellido" name="lastName" variant="outlined" size='small' value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />

        <TextField type='email' id="email" label="Email" name="email" placeholder='user@domain.com' variant="outlined" size='small' value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Button size="small" variant="contained" color="success" type='submit'>Comprar</Button>
      </form>
    </div>

  )
    ;
}


export default CheckoutForm;
