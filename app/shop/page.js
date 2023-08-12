import ProductCard from "@components/shared/ProductCard/ProductCard";

const laptop =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img01.jpg';
const tablet =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img02.jpg';
const speaker =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img03.jpg';
const phone =
  'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_products_img04.jpg';

const productInfo = [
  {
    id: 1,
    img: laptop,
    title: 'Acer C720v2103 Chromebook',
    price: 479.0,
  },
  {
    id: 2,
    img: tablet,
    title: 'Apple Ipad Air 2',
    price: '548.00',
  },
  {
    id: 3,
    img: speaker,
    title: 'Beats By Dr. Dre Beats Pill+ White',
    price: '153.00',
  },
  {
    id: 4,
    img: phone,
    title: 'Galaxy S7 Case Trianium Ultra Protective Cover',
    price: '8.30',
  },
];

const ShopPage = () => {
  return (
    <div className="mt-10 ">
      <div className="w-full bg-[#3C1FF4] mb-10 py-12">
        <p className="w-9/12 m-auto pl-4 text-white text-lg">Home / shop</p>
      </div>

      <div className="w-9/12 flex justify-between m-auto ">
        <div className="border p-3 w-[30%] h-[800px]">
          <h4 className="text-lg font-bold mb-5">Categories</h4>
          <p>SMART PHONES</p>
          <p>TABLETS</p>
          <p>LAPTOPS & COMPUTERS</p>
          <p>CAMERAS & PHOTOGRAPHY</p>
          <p>TV & AUDIO</p>
          <div className="w-full h-[1px] bg-[#EDEDED] my-14"></div>
          <div>
            <h1 className="font-bold">Fileted By</h1>
            <div className="w-full h-[1px] bg-[#EDEDED] mt-2"></div>
            <h4 className="mt-3">PRICE</h4>
            <input type="range" className="w-full mt-8" />
            <div className="w-full h-[1px] bg-[#EDEDED] mt-8"></div>
            <h4 className="my-3">BRANDS</h4>
            
            <div className="flex align-items">
              <input type="checkbox" className="mr-1"/>
              <p>Apple</p>
            </div>
            <div className="flex align-items">
              <input type="checkbox" className="mr-1"/>
              <p>Acer</p>
            </div>
            <div className="flex align-items">
              <input type="checkbox" className="mr-1"/>
              <p>Samsung</p>
            </div>
            
            </div>
            <div>
          </div>
      </div>
      <div className=" flex flex-wrap justify-center">
        {productInfo.map( product => <ProductCard product={product}  />)}
      </div>
    </div>
    </div>
  );
};
export default ShopPage;
