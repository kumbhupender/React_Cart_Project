import CartItem  from "./CartItem";
import Cart from "./Cart";
import Navbar from './Navbar';
import React from "react";
import firebase from 'firebase';
class App extends React.Component {

//adding state to our CartItem
constructor () {
  super();
  this.state = {
      products : [],
      loading : true
  }
  this.db = firebase.firestore();
}

componentDidMount() {
  // firebase
  // .firestore()
  // .collection('Products')
  // .get()
  // .then((snapshot) => {
  //   console.log(snapshot);

  //   snapshot.docs.map((doc) => {
  //     console.log(doc.data());


  //     const products = snapshot.docs.map((doc) => {
  //       const data = doc.data();
  //       data['id'] = doc.id;

  //       return data;
  //     })

  //     this.setState({
  //       products,
  //       loading : false
  //     })
  //   })
  // })

  this.db
  .collection('Products')
  //whenever we change in the db its automatically change in the products via listen event of onSnapshot
  .onSnapshot(((snapshot) => {
    console.log(snapshot);

    snapshot.docs.map((doc) => {
      console.log(doc.data());


      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;

        return data;
      })

      this.setState({
        products,
        loading : false
      })
    })
  }));
}

IncreaseQuantity = (product) => {
  console.log("Hey increae the qty",product);
  const { products } = this.state;
  const  index  = products.indexOf(product);

  // products[index].qty += 1;

  // this.setState({
  //     products
  // });

  const docRef = this.db.collection('Products').doc(products[index].id);

  docRef
    .update({
      qty : products[index].qty + 1  
    })
    .then(() => {
      console.log('Updated Successfully');
    })
    .catch((error) => {
      console.log(error);
    })
}

DecreaseQuantity = (product) => {
  console.log("Hey increae the qty",product);
  const { products } = this.state;
  const  index  = products.indexOf(product);

  //check
  // if(product.qty === 0){
  //     return;
  // }
  // products[index].qty -= 1;

  // this.setState({
  //     products
  // });
  const docRef = this.db.collection('Products').doc(products[index].id);

  docRef
    .update({
      qty : products[index].qty - 1  
    })
    .then(() => {
      console.log('Updated Successfully');
    })
    .catch((error) => {
      console.log(error);
    })
}

DeleteQuantity = (id) => {
  const { products } = this.state;
  const items = products.filter((item) => item.id !== id); //remove the id which we click from an array

  // this.setState({
  //     products : items
  // })
  const docRef = this.db.collection('Products').doc(id);

  docRef
    .delete()
    .then(() => {
      console.log("Delete successfully");
    })
    .catch((err) => {
      console.log(err)
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

addProduct = () => {
  this.db
  .collection('Products')
  .add({
    img : '',
    price : 20000,
    qty : 2,
    title : 'Washing Machine'
  })
  .then((docRef) => {
    console.log('Product has been added ' ,docRef);
  })
  .catch((error) => {
    console.log("Error :",error);
  })

}

  render(){
    const { products , loading} = this.state;
  return (
    <div className="App">
      <Navbar 
        count = {this.getCartCount()}
      />
    {/* <button onClick={this.addProduct} style={ {padding: 10 , fontSize : 20 } }>Add a product</button> */}
      <Cart 
        products={products}
        onIncreaseQuantity={this.IncreaseQuantity}
        onDecreaseQuantity={this.DecreaseQuantity}
        onDeleteQuantity={this.DeleteQuantity}
      />
    {loading && <h1>Loading Products...</h1>}
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
