import ProductCard from '@components/shared/ProductCard/ProductCard';
import SectionTitle from '@components/shared/SectionTitle/SectionTitle';

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

const LatestProduct = () => {
  return (
    <section className='top-categories'>
      <SectionTitle text1="Latest" text2='Products'/>
      
      <div className='m-auto mt-12 flex'>
      {productInfo.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  </section>
  );
};

export default LatestProduct;
