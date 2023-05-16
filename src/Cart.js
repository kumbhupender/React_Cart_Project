import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
   
    render (){
        
        return(

            <div className='cart'>
                {/* It is a wrapper of Cart */}
                <CartItem />
                <CartItem />
                <CartItem />
            </div>


        );
    }

}
export default Cart;