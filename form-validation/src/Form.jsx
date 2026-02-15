function Form({formData, setFormData, errors, setErrors, setSubmitted}) {

    //To update field dynamically
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }));

        //Clear error on handleChange
        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));

    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newErrors = {};

        //VALIDATION RULES

        //For name input
        if(!formData.name.trim()){
            newErrors.name = "Name is required";
        }

        //For email input
        if(!formData.email.trim()){
            newErrors.email = "Email is required";
        }else if(!formData.email.includes("@")){
            newErrors.email = "Invalid email address";
        }

        //For phone number input
        if(!formData.phone.trim()){
            newErrors.phone = "Phone number is required";
        }else if(isNaN(formData.phone)){
            newErrors.phone = "Phone number must be numeric";
        }

        //For orderID input
        if(!formData.orderId.trim()){
            newErrors.orderId = "order ID is required";
        }

        //For quantity input
        if(!formData.quantity.trim()){
            newErrors.quantity = "Quantity is required";
        }else if(isNaN(formData.quantity)){
            newErrors.quantity = "Quantity must be a number";
        }

        //For price input
        if(!formData.price.trim()){
            newErrors.price = "Price is required";
        }else if(isNaN(formData.price)){
            newErrors.price = "Price must be a number";
        }

        //For Payment Method input
        if(!formData.paymentMethod.trim()){
            newErrors.paymentMethod = "Payment method is required";
        }

        //For Delivery Address input
        if(!formData.deliveryAddress.trim()){
            newErrors.deliveryAddress = "Delivery address is required";
        }

        //For Order Status input
        if(!formData.orderStatus.trim()){
            newErrors.orderStatus = "Order Status is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0){
            setSubmitted(true);
        }
    }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-6">
      {/* Header */}
      <div className="text-center">
        <p className="text-2xl font-semibold text-gray-800">Order/Delivery Tracking</p>
        <p className="text-gray-500 mt-1">Trace your order</p>
      </div>

      {/* Personal Information */}
      <div className="space-y-2">
        <p className="font-medium text-gray-700">Personal Information</p>

        {/* Full name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* Email */}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Phone number  */}
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      {/* Order Information */}
      <div className="space-y-2">
        <p className="font-medium text-gray-700">Order Information</p>

        {/* Order ID */}
        <input
          type="text"
          name="orderId"
          value={formData.orderId}
          onChange={handleChange}
          placeholder="Order ID"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.orderId && <p className="text-red-500 text-sm">{errors.orderId}</p>}

        {/* Quantity */}
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}

        {/* Price */}
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

        {/* Payment Method */}
        <input
          type="text"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          placeholder="Payment Method"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}

        {/* Delivery Address */}
        <input
          type="text"
          name="deliveryAddress"
          value={formData.deliveryAddress}
          onChange={handleChange}
          placeholder="Delivery Address"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.deliveryAddress && <p className="text-red-500 text-sm">{errors.deliveryAddress}</p>}

        {/* Order Status */}
        <input
          type="text"
          name="orderStatus"
          value={formData.orderStatus}
          onChange={handleChange}
          placeholder="Order Status"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.orderStatus && <p className="text-red-500 text-sm">{errors.orderStatus}</p>}
      </div>

      {/* Submit Button */}
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
        Submit
      </button>
    </form>
  );
}

export default Form;
