'use client'
import ProductCard from '@components/shared/ProductCard/ProductCard';
import SectionTitle from '@components/shared/SectionTitle/SectionTitle';
import { useSelector } from 'react-redux';

const LatestProduct = () => {
  const products = useSelector(state => state.products.data.products)
  const latestProducts = products?.filter(product => product.latest);
  console.log('[latestProducts]', latestProducts)
  return (
    <section className='top-categories'>
      <SectionTitle text1="Latest" text2='Products'/>
      
      <div className='m-auto mt-12 flex flex-wrap'>
      {latestProducts?.map((product) => (
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
