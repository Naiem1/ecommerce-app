'use client';
import CartList from '@components/CartList/CartList';
import { clearCart } from '@redux/slices/cartSlice';
import { calculateTotalPrice } from '@util/totalPriceCalculation';
import { calculateTotalProducts } from '@util/totalProduct';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const SHIPPING_CHARGE = 4.99;

const CartPage = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const router = useRouter()
  const subtotalPrice = calculateTotalPrice(cartState.item);
  const totalPrice = subtotalPrice + SHIPPING_CHARGE;
  const totalProduct = calculateTotalProducts(cartState.item);



  console.log('[cart-page]>>', cartState);

  return (
    <div className="mt-10">
      <div className="w-full bg-[#3C1FF4] mb-10 py-12">
        <p className="w-9/12 m-auto pl-4 text-white text-lg">Cart</p>
      </div>

      {
        totalProduct > 0 ? <div className="w-9/12  m-auto flex">
        <div className="flex-1 ">
          {cartState?.item?.map((cart) => (
            <CartList cart={cart} key={cart.id} />
          ))}
            <div className='mt-5'>
              <button onClick={() => dispatch(clearCart())} className='px-6 py-2 bg-blue-700 text-white hover:bg-blue-800'>Clear All</button>
            </div>
        </div>

        <div className="mt-6 h-full rounded-lg border ml-5 bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$ {subtotalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$ {subtotalPrice > 0 ? totalPrice : 0} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button onClick={() => router.push('/checkout', {scroll: false})} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div> : <div className='p-4 bg-blue-700 text-center w-2/12  m-auto text-white font-bold text-lg'>Your Cart Is Empty</div>
      }
    </div>
  );
};
export default CartPage;