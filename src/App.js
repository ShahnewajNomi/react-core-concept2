import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      <Counter></Counter>
      <ExternalUser></ExternalUser>
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

function Counter(){
  const [count,setCount]=useState(256);
  const IncreaseCount=()=>{
    const newCountPlus=count+5;
    setCount(newCountPlus)
  }
  const DecreaseCount=()=>{
    const newCountMinus=count-5;
    setCount(newCountMinus)
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <br />
      <br />
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}

function ExternalUser(){
  const [users,setUsers]=useState([]);
  // useEffect( ()=>{
  //
  // },[]);
  useEffect( ()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data));
  },[]);
  return(
    <div>
      <h2>External user</h2>
      <p>{users.length}</p>
      {
        users.map(user=> <User name={user.name} email={user.email} phone={user.city}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;



