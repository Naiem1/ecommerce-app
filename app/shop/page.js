'use client'

import { usePathname } from "next/navigation";
import ProductCard from "@components/shared/ProductCard/ProductCard";
import { fetchProducts } from "@redux/slices/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const ShopPage = () => {

  const dispatch = useDispatch();
  
  const products = useSelector((state) => state?.products?.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  console.log(products);

  const currentPathname = usePathname();

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
        {products?.products?.map( (product) => <ProductCard product={product} key={product.id}  />)}
      </div>
    </div>
    </div>
  );
};
export default ShopPage;
