import React from 'react';

class CartItem extends React.Component {
    //adding state to our CartItem
    constructor () {
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }
        // this.increaseQuantity = this.increaseQuantity.state.bind(this);
    }

    increaseQuantity = () => {
        // console.log("this",this.state);

        /*setState form-1
        this.setState({
            qty : this.state.qty + 1  //Here react take it and merge it into the state i.e. shallow merging then re-render the componenet
        });
        */

        //setState form 2 , passing function in the setState but its use when we required prevState
        this.setState((prevState) => {
            return {
                qty : prevState.qty + 1
            }
        },()=>{
            console.log(this.state.qty)
        });
    }

    decreaseQuantity = () => {
        //check
        const { qty } = this.state;

        if(qty === 0) {
            return
        }
        this.setState((prevState) => {
            return {
            qty : prevState.qty - 1
            }
        }, () => {
            
        });
    }




    render () {
        //destructuring
        const {price , title , qty} = this.state;
        return (

            <div className='cart-item'>

                <div className='left-block'>
                    <img style={styles.image}/>
                </div>

                <div className='right-block'>
                    <div style={ {fontSize : 25} }>{title}</div>
                    <div style={ {color : '#ccc'} }>Rs: {price}</div>
                    <div style={ {color : '#ccc'} }>Qty: {qty}</div>


                    <div className='cart-item-actions'>
                    {/* Buttons */}
                    <img alt="increase" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992651.png'  onClick={this.increaseQuantity} />

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