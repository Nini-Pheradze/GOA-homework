import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const promocodes = [
    { code: "Discount10", discount: 0.1 },
    { code: "Discount20", discount: 0.2 },
    { code: "Discount50", discount: 0.5 },
    { code: "FREE", discount: 1 },
  ];

  // Calculate total price
  useEffect(() => {
    const sum = cart.reduce(
      (prev, cur) => prev + cur.unit * cur.price,
      0
    );
    setPrice(sum);
    setDiscountedPrice(null); // reset discount if cart changes
  }, [cart]);

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  // Add product to cart
  const handleAddToCart = (prod) => {
    const isInCart = cart.find((item) => item.id === prod.id);

    if (!isInCart) {
      setCart([...cart, { ...prod, unit: 1 }]);
    } else {
      handleIncreaseUnit(prod.id);
    }
  };

  // Increase quantity
  const handleIncreaseUnit = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, unit: item.unit + 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Decrease quantity
  const handleDecreaseUnit = (id) => {
    const item = cart.find((item) => item.id === id);

    if (item.unit === 1) {
      setCart(cart.filter((item) => item.id !== id));
      return;
    }

    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, unit: item.unit - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Apply promocode
  const handleSubmit = (e) => {
    e.preventDefault();

    const promocode = e.target.promo.value;
    const isValid = promocodes.find(
      (p) => p.code === promocode
    );

    if (isValid) {
      const discounted =
        price - price * isValid.discount;
      setDiscountedPrice(discounted.toFixed(2));
      alert(
        `Promocode applied! You got ${
          isValid.discount * 100
        }% off!`
      );
    } else {
      alert("Invalid promocode!");
    }
  };

  return (
    <main>
      <h1>My Market</h1>

      {/* PRODUCTS */}
      <section>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <img src={product.image} width={200} />
              <button
                onClick={() =>
                  handleAddToCart(product)
                }
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* CART */}
      <section>
        <h2>Cart</h2>
        <p>
          Products:{" "}
          {cart.reduce(
            (prev, cur) => prev + cur.unit,
            0
          )}
        </p>

        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>${item.price}</p>
              <img src={item.image} width={100} />
              <div>
                <button
                  onClick={() =>
                    handleDecreaseUnit(item.id)
                  }
                >
                  -
                </button>
                <span>{item.unit}</span>
                <button
                  onClick={() =>
                    handleIncreaseUnit(item.id)
                  }
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* TOTAL */}
      <section>
        <h2>Total</h2>
        <p>Price: ${price.toFixed(2)}</p>
      </section>

      {/* CHECKOUT */}
      <section>
        <h2>Checkout</h2>
        <p>Current Price: ${price.toFixed(2)}</p>
        <p>
          Discounted Price:{" "}
          {discountedPrice
            ? `$${discountedPrice}`
            : "—"}
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="promo"
            placeholder="Promocode"
            required
          />
          <button
            disabled={cart.length === 0}
          >
            Apply
          </button>
        </form>
      </section>
    </main>
  );
};

export default App;


