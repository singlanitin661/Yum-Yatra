import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CardItemList from "./CartItemList";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dataToBeSent = { data: cartItems };
  const dispatch = useDispatch() ;
  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="text-center mb-4">
      <h1 className="font-bold text-3xl">Cart</h1>
      <button className="bg-black rounded-lg px-2 py-1 text-white my-2 text-xl" onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length ===0 && <h1>Cart is Empty. Add items to Cart!</h1>}
      
      <CardItemList items={dataToBeSent} />
      

    </div>
  );
};

export default Cart;
