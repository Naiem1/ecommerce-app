import {
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
  totalPriceCalculation,
} from '@redux/slices/cartSlice';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

const CartList = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => dispatch(removeItemFromCart(id));
  const handleIncrementQuantity = (id) => dispatch(incrementQuantity(id))

  const handleDecrementQuantity = (id) => {
    if (cart.quantity === 1) {
      dispatch(removeItemFromCart(id));
      return;
    } else {
      dispatch(decrementQuantity(id));
    }
  };

  

  return (
    <div
      key={cart.id}
      className="flex align-items shadow-md px-4 py-4 my-1 rounded border"
    >
      <div className="mr-3">
        <Image
          src={cart.thumbnail}
          width={100}
          height={90}
          alt="product image"
        />
      </div>
      <div>
        <h4 className="font-semibold text-xl">{cart.title}</h4>
        <p className="font-semibold text-lg">
          $ {cart.price} x {cart.quantity}
        </p>
      </div>

      <div className="ml-auto text-center">
        <div className="flex items-center border-gray-100 mr-auto">
          <span
            onClick={() => handleDecrementQuantity(cart.id)}
            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
          >
            -
          </span>
          <input
            className="h-8 w-8 border bg-white text-center text-xs outline-none"
            type="number"
            value={cart.quantity}
          />
          <p>{cart.amount}</p>
          <span
            onClick={() => handleIncrementQuantity(cart.id)}
            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
          >
            +
          </span>
        </div>
        <div className="mt-2">
          <button
            onClick={() => handleRemoveFromCart(cart.id)}
            className="px-1 py-1 bg-blue-600 text-white w-full text-sm hover:bg-red-500"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartList;
