import Image from 'next/image';
import Link from 'next/link';

const laptop =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img01.jpg';
const tablet =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img02.jpg';
const speaker =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img03.jpg';
const phone =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img04.jpg';

const ProductCard = ({ product }) => {
  const { thumbnail, images, title, price, id } = product;
 console.log(product.id)

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
          <button className="bg-blue-700 py-2 px-4 text-white font-semibold hover:bg-blue-800">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
