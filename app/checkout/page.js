'use client';
import { clearCart, postCartItems } from '@redux/slices/cartSlice';
import { postCheckoutItem } from '@redux/slices/checkoutSlice';
import { calculateTotalPrice } from '@util/totalPriceCalculation';
import { calculateTotalProducts } from '@util/totalProduct';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SHIPPING_CHARGE = 10;

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  postcode: '',
};

const Checkout = () => {
  const dispatch = useDispatch();
  const orderItems = useSelector((state) => state.cart.item);
  const cartState = useSelector((state) => state.cart);
  // const checkoutItem = useSelector(state => state.checkout);
  const [value, setValue] = useState({ ...INITIAL_STATE });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  console.log('cartState', cartState)

  const orderProducts = orderItems.reduce((acc, cur) => {
    acc = {
      id: nanoid(10),
      products: orderItems.map((item) => ({
        productId: item.id,
        title: item.title,
        quantity: item.quantity,
      })),
      userId: 5,
      address: value,
    };
    return acc;
  }, {});

  console.log('orderedProducts', orderProducts);

  

  const handleSubmit = (e) => {
    if (value.firstName && value.lastName && value.email && value.address) {
      dispatch(postCartItems(orderProducts));
    }

    if (cartState.status === 'fulfilled') {
      setValue({ ...INITIAL_STATE });
      dispatch(clearCart());
    }

    e.preventDefault();
  };


  const totalOrders = calculateTotalProducts(orderItems);
  const subtotal = calculateTotalPrice(orderItems);
  const totalPrice = subtotal + SHIPPING_CHARGE

  


  return (
    <div className="mt-10">
      <div className="w-full bg-[#3C1FF4] mb-10 py-12">
        <p className="w-9/12 m-auto pl-4 text-white text-lg">Checkout</p>
      </div>
      <div className="container px-12 py-2 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form
              onSubmit={handleSubmit}
              className="justify-center w-full mx-auto"
              method="post"
              action
            >
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={value.firstName}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={value.lastName}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      for="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="text"
                      placeholder="Email"
                      value={value.email}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      for="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="address"
                      cols="20"
                      rows="4"
                      value={value.address}
                      placeholder="Address"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="city"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      value={value.city}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      for="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      value={value.postcode}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="relative pt-3 xl:pt-6">
                  <label
                    for="note"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4"
                    placeholder="Notes for delivery"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button className="w-full px-6 py-2 text-white bg-blue-600 hover:bg-blue-900">
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                {  orderItems.map( item =>  <div key={item.id} className="flex space-x-4">
                    <div>
                      <Image
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt="image"
                        className="w-60"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold"></h2>
                    <p className="text-sm">{ item.title}</p>
                      <span className="text-red-600">Price</span> ${item.price}
                    </div>
                </div>)}
                  
                </div>
              </div>
              <div className="flex p-4 mt-4">
                <h2 className="text-xl font-bold">ITEMS {totalOrders }</h2>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className="ml-2">${ subtotal}</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span className="ml-2">$10</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2">$ { totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
