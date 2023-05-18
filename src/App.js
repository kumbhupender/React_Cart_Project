import CartItem  from "./CartItem";
import Cart from "./Cart";
import Navbar from './Navbar';
import React from "react";

class App extends React.Component {

//adding state to our CartItem
constructor () {
  super();
  this.state = {
      products : [
          {
              price : 999,
              title : 'Mobile Phone',
              qty : 1,
              img : '',
              id : 1
          },
          {
              price : 9999,
              title : 'Laptop',
              qty : 10,
              img : '',
              id : 2
          },
          {
              price : 99,
              title : 'Watch',
              qty : 1,
              img : '',
              id : 3
          }
      ]
  }
  
}

IncreaseQuantity = (product) => {
  console.log("Hey increae the qty",product);
  const { products } = this.state;
  const  index  = products.indexOf(product);

  products[index].qty += 1;

  this.setState({
      products
  });
}

DecreaseQuantity = (product) => {
  console.log("Hey increae the qty",product);
  const { products } = this.state;
  const  index  = products.indexOf(product);

  //check
  if(product.qty === 0){
      return;
  }
  products[index].qty -= 1;

  this.setState({
      products
  });
}

DeleteQuantity = (id) => {
  const { products } = this.state;
  const items = products.filter((item) => item.id !== id); //remove the id which we click from an array

  this.setState({
      products : items
  })
}

getCartCount = (product) => {
  const { products } = this.state;
  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}



  render(){
    const { products } = this.state;
  return (
    <div className="App">
      <Navbar 
        count = {this.getCartCount()}
      />
      <h1>Cart</h1>
      <Cart 
        products={products}
        onIncreaseQuantity={this.IncreaseQuantity}
        onDecreaseQuantity={this.DecreaseQuantity}
        onDeleteQuantity={this.DeleteQuantity}
      />
    </div>
  );
  }
}

export default App;
