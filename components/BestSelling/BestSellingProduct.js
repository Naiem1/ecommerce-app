'use client'
import ProductCard from "@components/shared/ProductCard/ProductCard";
import SectionTitle from "@components/shared/SectionTitle/SectionTitle";
import { useSelector } from "react-redux";


const BestSellingProduct = () => {
  const products = useSelector(state => state.products.data.products)
  const bestSelling = products?.filter(product => product.stock > 90);



   
  return (
    <section className="mt-16">
      <div className="top-categories">
      <SectionTitle
        text1='best Selling'
        text2='products'
        />
        
        <div className='m-auto mt-12 flex flex-wrap'>
      {bestSelling?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
    </div>
    </section>
  )
}

export default BestSellingProduct;