import React from 'react';
import { Formik, Field, Form } from 'formik';
import { addNewOrder } from '../../utils/firebaseFetching';
import { CartContext } from '../../context/CartContext';







const CheckoutForm = ({ setId }) => {
const { items } = CartContext();

const handleSubmit = async (values, resetForm) => {

  const orderId = await addNewOrder(order);
  setId(orderId);
  resetForm({ values: ""});
}

  <div>
    <h1>Para finalizar tu compra!</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">Nombre:</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Apellido</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="test@test.com.ar"
          type="email"
        />
        <button type="submit">Comprar</button>
      </Form>
    </Formik>
  </div>
;
}


export default CheckoutForm;
