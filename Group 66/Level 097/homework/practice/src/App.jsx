import { useEffect, useState } from "react"

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState([]);
  const promocodes = [
    { code: 'Discount10', discount: 0.1 },
    { code: 'Discount20', discount: 0.2 },
    { code: 'Discount50', discount: 0.5 },
    { code: 'FREE', discount: 1 },
  ];


  useEffect(() => {
    const sum = cart.reduce((prev, cur) => prev + cur.unit * cur.price, 0);
    setPrice(sum.toFixed(2));
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        console.log(data);
        setProducts(data);
      } catch(err) {
        console.log(err.message);
      }
    }

    fetchData();
  }, []);

  const handleAddToCart = (prod) => {
    const isInCart = cart.find(item => item.id === prod.id);

    if(!isInCart) {
      const product = { ...prod, unit: 1 };
      setCart([...cart, product]);
    } else {
      handleIncreaseUnit(prod.id);
    }
  };

  const handleIncreaseUnit = (id) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit + 1 } : item);

    setCart(updatedCart)
  };

  const handleDecreaseUnit = (id) => {
    const item = cart.find(item => item.id === id);

    if(item.unit === 1) {
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      return;
    } 

    const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit - 1 } : item);

    setCart(updatedCart)
  };
  
  return (
    <main>  
      <h1>My market</h1>

      <section>
        <h2>Product List</h2>
        <ul>
          {
            products.map(product => (
                <li key={product.id}>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.category}</p>
                  <img src={product.image} width={200} />
                  <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                </li>
              )
            )
          }
        </ul> 
      </section>

      <section>
        <h2>Cart</h2>
        <p>Products: {cart.reduce((prev, cur) => prev + cur.unit, 0)}</p>
        <ul>
          {
            cart.map(item => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <img src={item.image} width={100} />
                <div>
                  <button onClick={() => handleDecreaseUnit(item.id)}>-</button>
                  <span>{item.unit}</span>
                  <button onClick={() => handleIncreaseUnit(item.id)}>+</button>
                </div>
              </li>
            ))
          }
        </ul>
      </section>

      <section>
        <h2>Cart</h2>
        <p>Price: {price}</p>
      </section>

      <section>
        <h2>Checkout</h2>
        <p>Current Time: {price}</p>
        <p>Discounted price: </p>


        <form>
          <input type="text" placeholder="Promocode" required />
          <button disabled={cart.length == 0 ? true : false}>Submit</button>
        </form>
      </section>
    </main>
  )
}

export default App
