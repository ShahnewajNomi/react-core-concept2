import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'laptop',price:153000},
    {name:'phone',price:52000},
    {name:'watch',price:5200},
    {name:'Table',price:520},
  ]
    
  
  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Laptop"price="100000"></Product>
      <Product name="Phone" price="75000"></Product> */}
      
    </div>
  );
}

function Product(props){
  return(
    <div className="product">
      <h3>Name:{props.name} </h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;



