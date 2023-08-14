import BestSellingProduct from '@components/BestSelling/BestSellingProduct';
import Hero from '@components/Hero/Hero';
import LatestProduct from '@components/LatestProduct/LatestProduct';
import PromotionalBanner from '@components/PromotionalBanner/PromotionalBanner';
import TopCategories from '@components/TopCategories/TopCategories';
import ProductCard from '@components/shared/ProductCard/ProductCard';
import { useSelector } from 'react-redux';

const Home = () => {
  return (
    <div>
      <Hero />
      <TopCategories />
      <LatestProduct />
      <BestSellingProduct />
      <PromotionalBanner/>
    </div>
  );
};
export default Home;
