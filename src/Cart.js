import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
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
                qty : 71,
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
    render (){
        const { products } = this.state;
        return(

            <div className='cart'>
                {/* It is a wrapper of Cart and using props in this*/}
                { products.map((product) => {
                    return <CartItem 
                    product={ product }
                    key={ product.id }
                    onIncreaseQuantity={this.IncreaseQuantity}
                    />
                })
                }
                
            </div>


        );
    }

}
export default Cart;