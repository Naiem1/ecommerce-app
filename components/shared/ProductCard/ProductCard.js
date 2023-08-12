import Image from 'next/image';

const laptop = 'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img01.jpg';
const tablet = 'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img02.jpg';
const speaker = 'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img03.jpg';
const phone = 'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img04.jpg';



const ProductCard = ({ product }) => {
  const { img, title, price} = product;
  return (
    <div className=''>
      <div className='border m-auto p-2 text-center m-2'>
        <div>
          <Image src={laptop} width={350} height={350} alt="product image" />
        </div>
        <div >
          <h4 className='text-lg'>Acer C720v2103 Chromebook</h4>
        </div>
        <div>
          <p className='font-bold text-gray-500 text-lg'>$479.00</p>
        </div>
        <div className='mt-3'>
          <button className='bg-blue-700 py-2 px-4 text-white font-semibold hover:bg-blue-800'>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
