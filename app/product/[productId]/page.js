'use client'
import { usePathname } from 'next/navigation'
import { fetchProductById } from '@redux/slices/productsSlice';
import Image from 'next/image';
import { useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '@redux/slices/cartSlice';


const ProductPage = ({params}) => {
  
  const { productId } = params;
  

  const dispatch = useDispatch();
  const state = useSelector(state => state.products.selectedProduct);

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [dispatch])


  const currentPathname = usePathname();
  const path = currentPathname.replace(/[&\/\\#,+()$~%.'":*?<>{}0-9]/g, '');
  
  const handleAddToCart = () => {
    dispatch(addItemToCart(state));
  }

  return (
    <div className="mt-10">
       <div className="w-full bg-[#3C1FF4] mb-10 py-12">
        <p className="w-9/12 m-auto pl-4 text-white text-lg">{path} / { state?.title}</p>
      </div>

      <div className="flex w-8/12 mx-auto mt-10 border py-5 shadow">
        <div>
          <div>
            <Image src={state?.thumbnail} width={500} height={500} alt={state?.title} />
          </div>
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl mb-3">{state?.title}</h2>
          <p>
            <span className="font-bold">Product Id: </span> {state?.category+state?.id}
          </p>
          <p>
            <span className="font-bold">Brand: </span> {state?.brand}
          </p>
          <div>
            <h4 className="font-bold mt-8">Quick Overview</h4>
            <ul className="list-disc px-8">
              <li>{state?.description.split(' ')[0] }</li>
              <li>{state?.description.split(' ')[1] }</li>
              <li>{state?.description.split(' ')[2] }</li>
              <li>{state?.description.split(' ')[3] }</li>
              <li>{state?.description.split(' ')[5] }</li>
              <li>{state?.description.split(' ')[6] }</li>
              
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-xl">
              <span>Price: </span>$ {state?.price}
            </h2>
          </div>
          <div className="flex-center px-8 py-2 bg-blue-700 text-lg text-white mt-16 ">
            <div>
              <MdShoppingCart />
            </div>
            <button onClick={handleAddToCart}> Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
