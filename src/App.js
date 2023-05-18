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
              img : 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
              id : 1
          },
          {
              price : 9999,
              title : 'Laptop',
              qty : 10,
              img : 'https://images.pexels.com/photos/6446685/pexels-photo-6446685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              id : 2
          },
          {
              price : 99,
              title : 'Watch',
              qty : 1,
              img : 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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

//Total price
getTotal = () => {
  const { products } = this.state;

  let totalCount = 0;

  products.map((product) => {
    totalCount = totalCount + product.qty * product.price;
  })
  return totalCount;
}


  render(){
    const { products } = this.state;
  return (
    <div className="App">
      <Navbar 
        count = {this.getCartCount()}
      />

      <Cart 
        products={products}
        onIncreaseQuantity={this.IncreaseQuantity}
        onDecreaseQuantity={this.DecreaseQuantity}
        onDeleteQuantity={this.DeleteQuantity}
      />

      <div style={styles.totalPrice}>TOTAL : Rs.{this.getTotal()}</div>
    </div>
  );
  }
}

const styles = {
  totalPrice : {
    fontSize : 20,
    padding : 10,
    border :'2px solid black',
    borderRadius : 500,
    width : 200,
    textAlign : 'center',
    fontWeight : 'bolder',
    marginLeft : 10
  }
}

export default App;
