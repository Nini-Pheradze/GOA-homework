import './main.css'


function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: ""
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts((prev) => [...prev, formData]);

    setFormData({
      name: "",
      description: "",
      price: "",
      quantity: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          პროდუქტის დამატება
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input 
            type="text"
            name="name"
            placeholder="პროდუქტის სახელი"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input 
            type="text"
            name="description"
            placeholder="აღწერა"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input 
            type="number"
            name="price"
            placeholder="ფასი"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input 
            type="number"
            name="quantity"
            placeholder="რაოდენობა"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            დამატება
          </button>
        </form>
      </div>

      {/* Products List */}
      <div className="w-full max-w-md mt-8">
        <h3 className="text-xl font-semibold mb-3">პროდუქტების სია</h3>

        <ul className="space-y-2">
          {products.map((p, index) => (
            <li 
              key={index} 
              className="p-3 bg-white shadow rounded-lg"
            >
              <strong>{p.name}</strong> — {p.description}  
              <br />
              <span className="text-sm text-gray-600">
                {p.price} ₾ | {p.quantity} ცალი
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductForm;

