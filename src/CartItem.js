import React from 'react';

class CartItem extends React.Component {

    render () {
        console.log('this.props',this.props);
        //destructuring
        const {price , title , qty} = this.props.product;
        return (

            <div className='cart-item'>
                {/* {this.props.jsx} */}
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>

                <div className='right-block'>
                    <div style={ {fontSize : 25} }>{title}</div>
                    <div style={ {color : '#ccc'} }>Rs: {price}</div>
                    <div style={ {color : '#ccc'} }>Qty: {qty}</div>


                    <div className='cart-item-actions'>
                    {/* Buttons */}
                    <img alt="increase" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992651.png'  onClick={() => this.props.onIncreaseQuantity(this.props.product)} />

                    <img alt="decrease" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992683.png' onClick={this.decreaseQuantity} />

                    <img alt="delete" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png' />
                </div>
            </div>

                
            </div>

        );
    }
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