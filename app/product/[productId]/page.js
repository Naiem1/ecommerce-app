import Image from 'next/image';
import { MdShoppingCart } from 'react-icons/md';
const monitor =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img15.jpg';

const ProductPage = (props) => {
  console.log(props);
  return (
    <div className="">
      <div className="flex w-8/12 mx-auto mt-20 border py-5 shadow">
        <div>
          <div>
            <Image src={monitor} width={500} height={500} alt="product image" />
          </div>
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl mb-3">
            Flexible WareLess Headphone
          </h2>
          <p>
            <span className="font-bold">Product Id: </span> headphone1
          </p>
          <p>
            <span className="font-bold">Brand: </span> samsung
          </p>
          <div>
            <h4 className="font-bold mt-8">Quick Overview</h4>
            <ul className="list-disc px-8">
              <li>RAM - 16GB</li>
              <li>Processor Type - Apple M1</li>
              <li>Graphics Memory - Shared</li>
              <li>Display Size(inch) - 13.3</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-xl">
              <span>Price: </span>$3999
            </h2>
          </div>
          <div className="flex-center px-8 py-2 bg-blue-700 text-lg text-white mt-16 ">
            <div>
              <MdShoppingCart />
            </div>
            <button> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
