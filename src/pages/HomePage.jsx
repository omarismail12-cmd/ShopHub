
import BodySection from "../components/BodySection";
import FeaturedCategories from "../components/FeaturedCategories";
import Header from "../components/header";
import FeaturedProducts from "../components/Products";


function HomePage() {
  return (
    <div>
      <Header />
      <BodySection />
      <FeaturedCategories />
      <FeaturedProducts />
   
    </div>
  );
}

export default HomePage;