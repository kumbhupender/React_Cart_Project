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
    render (){
        const { products } = this.state;
        return(

            <div className='cart'>
                {/* It is a wrapper of Cart and using props in this*/}
                { products.map((product) => {
                    return <CartItem 
                    product={ product }
                    key={ product.id }
                    />
                })
                }
                
            </div>


        );
    }

}
export default Cart;