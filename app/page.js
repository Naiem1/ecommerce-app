import Hero from '@components/Hero/Hero';
import LatestProduct from '@components/LatestProduct/LatestProduct';
import TopCategories from '@components/TopCategories/TopCategories';
import ProductCard from '@components/shared/ProductCard/ProductCard';

const Home = () => {
  return (
    <div>
      <Hero />
      <TopCategories />
      <LatestProduct/>
    </div>
  );
};
export default Home;
