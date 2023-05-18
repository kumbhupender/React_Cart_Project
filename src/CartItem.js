import React from 'react';

const CartItem = (props) => {

        //destructuring
        const {price , title , qty} = props.product;
        const {product, onIncreaseQuantity , onDecreaseQuantity ,onDeleteQuantity} = props;
        return (

            <div className='cart-item'>
                {/* {this.props.jsx} */}
                <div className='left-block'>
                    <img style={styles.image} src={product.img} />
                </div>

                <div className='right-block'>
                    <div style={ {fontSize : 25} }>{title}</div>
                    <div style={ {color : '#ccc'} }>Rs: {price}</div>
                    <div style={ {color : '#ccc'} }>Qty: {qty}</div>


                    <div className='cart-item-actions'>
                    {/* Buttons */}
                    <img alt="increase" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992651.png'  onClick={() => onIncreaseQuantity(product)} />

                    <img alt="decrease" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992683.png' onClick={() => onDecreaseQuantity(product)} />

                    <img alt="delete" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png' onClick={() => onDeleteQuantity(product.id)}/>
                </div>
            </div>

                
            </div>

        );
    
}


// Adding styles via object
const styles = {
    image : {
        height : 110,
        width : 110,
        border : 4,
        backgroundColor : '#ccc'
    }   
}
export default CartItem;