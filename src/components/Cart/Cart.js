import React,{useContext} from 'react'
import CartCntxt from '../../Store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';


const Cart = (props) => {
  const cartcntxt = useContext((CartCntxt))
  
  // const totalAmount = `$${CartCntxt.totalAmount.toFixed(2)}`;
  // const hasItems = CartCntxt.items.length > 0;

  let totalAmount = 0;
  cartcntxt.items.map((item) => {
    return (totalAmount = totalAmount + item.quantity * item.price);
  });

  const cartItemRemoveHandler = id =>{}

  const cartItemAddHandler = item =>{}


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartcntxt.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;