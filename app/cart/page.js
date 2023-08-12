import Image from 'next/image';
const monitor =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img15.jpg';

const CartPage = () => {
  return (
    <div className="mt-10">
      <div className="w-full bg-[#3C1FF4] mb-10 py-12">
        <p className="w-9/12 m-auto pl-4 text-white text-lg">Cart</p>
      </div>

      <div className="w-9/12  m-auto flex">
        <div className='flex-1 '>
          <div className='flex align-items shadow-md px-4 rounded border'>
            <div >
              <Image src={monitor} width={100} height={90} alt="product image" />
            </div>
            <div>
              <h4 className='font-semibold text-xl'>Acer C720v2103 Chromebook</h4>
              <p className='font-semibold text-lg'>$153.00</p>
            </div>


            <div className='ml-auto text-center'>
              
            <div className="flex items-center border-gray-100 mr-auto">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div className='mt-2'>
                <button className='px-1 py-1 bg-blue-600 text-white w-full text-sm hover:bg-red-500'> REMOVE</button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-6 h-full rounded-lg border ml-5 bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
      </div>
    </div>
  );
};
export default CartPage;
