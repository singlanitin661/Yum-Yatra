import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CardItemList from "./CartItemList";
import "./PaymentDetails.css"
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  let total = 0;
  cartItems.map(
    (item) =>
      (total += item.card.info.price
        ? item.card.info.price / 100
        : item.card.info.defaultPrice / 100)
  );
  const dataToBeSent = { data: cartItems };
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center mb-4">
      <h1 className="font-bold text-3xl">Cart</h1>
      <button
        className="bg-black rounded-lg px-2 py-1 text-white my-2 text-xl"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <h1>Cart is Empty. Add items to Cart!</h1>
      ) : (
        <div className="flex flex-wrap mx-5">
          <div className="w-8/12">
            <CardItemList items={dataToBeSent} />
          </div>
          <div className="w-3/12 shadow-lg h-40 bg-gray-200 mx-auto rounded-lg">
            <div className="text-xl pt-8">
              <h1 className="text-xl font-bold">Bill Details : </h1>
              <p>Item Total : {total}</p>
            </div>
            <button className="bg-black rounded-lg px-2 py-1 text-white my-2 text-xl shadow-3xl cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;
