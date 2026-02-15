import './App.css';
import Form from './Form.jsx';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderId: "",
    quantity: "",
    price: "",
    paymentMethod: "",
    deliveryAddress: "",
    orderStatus: "",
  });

  const [errors, setErrors] = useState({});

  return (
    <>
      <Form
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
      />
    </>
  );
}

export default App;
