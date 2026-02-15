function Form({formData, setFormData, errors, setErrors}) {

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

        //Validation rules
        if(!formData.name.trim()){
            newErrors.name = "Name is required";
        }

        if(!formData.email.trim()){
            newErrors.email = "Email is required";
        }else if(!formData.email.includes("@")){
            newErrors.email = "Invalid email address";
        }
    }

  return (
    <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-6">
      {/* Header */}
      <div className="text-center">
        <p className="text-2xl font-semibold text-gray-800">Order/Delivery Tracking</p>
        <p className="text-gray-500 mt-1">Trace your order</p>
      </div>

      {/* Personal Information */}
      <div className="space-y-2">
        <p className="font-medium text-gray-700">Personal Information</p>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Order Information */}
      <div className="space-y-2">
        <p className="font-medium text-gray-700">Order Information</p>
        <input
          type="text"
          placeholder="Order ID"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Quantity"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Price"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Payment Method"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Delivery Address"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Order Status"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Submit Button */}
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
        Submit
      </button>
    </form>
  );
}

export default Form;
