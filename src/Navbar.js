import React from 'react';

//Because it does not have a state so convert it into function component
const Navbar = (props) => {

    
        
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconcontainer}>
                    <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/128/1170/1170678.png' alt='cart-icon'/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        );
    
}


// Adding styles via object
const styles = {
    nav : {
        height : 100,
        background : '#4267b2',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center'
    } ,
    cartIconcontainer : {
        position : 'relative'
    },
    cartIcon : {
        width : 60,
        height : 60,
        marginRight : 15
    },
    cartCount : {
        position : 'absolute',
        background : 'yellow',
        top : 0,
        right : 12,
        fontSize : 20,
        borderRadius : 100,
        padding : 4
    }

    
}
export default Navbar;