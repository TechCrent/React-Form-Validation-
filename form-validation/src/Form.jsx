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

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0){
            console.log("Form submitted: ", formData)
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
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Phone number  */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
