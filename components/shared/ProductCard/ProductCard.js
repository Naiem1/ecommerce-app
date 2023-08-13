'use client'

import { addItemToCart } from '@redux/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { thumbnail, images, title, price, id } = product;
 
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product))
  }


  return (
    <div className="border p-2  max-w-[300px] text-center m-2">
      <div className='p-10'>
        <Link href={`/product/${id}`}>
          <div className=" m-auto">
          <Image src={thumbnail} width={350} height={10} alt="product image" />
        </div>
        <div>
          <h4 className="text-lg px-10">{title}</h4>
          </div>
        </Link>
        <div>
          <p className="font-bold text-gray-500 text-lg">$ {price}</p>
        </div>
        <div className="mt-3">
          <button onClick={() => handleAddToCart(product)} className="bg-blue-700 py-2 px-4 text-white font-semibold hover:bg-blue-800">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
