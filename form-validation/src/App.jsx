import './App.css';
import Form from './Form.jsx';
import { useState } from 'react';
import Validated from './Validated.jsx';

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

  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {submitted ? (
        <Validated />
      ) : (
      <Form
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        setSubmitted={setSubmitted}
      />
      )}
    </>
  );
}

export default App;
