import React from 'react';

class CartItem extends React.Component {
    render () {
        return (

            <div className='cart-item'>

                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                
                <div className='right-block'>
                    <div style={ {fontSize : 25} }>Phone</div>
                    <div style={ {color : '#ccc'} }>999</div>
                    <div style={ {color : '#ccc'} }>1</div>
                </div>

                <div className='cart-item-actions'>
                    {/* Buttons */}
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