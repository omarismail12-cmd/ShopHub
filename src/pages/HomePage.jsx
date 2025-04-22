import BodySection from "../components/bodySection";
import FeaturedCategories from "../components/FeaturedCategories";
import Header from "../components/header";
import FeaturedProducts from "../components/Products";
import Footer from "../components/Footer";

function HomePage() {
    return (
      <div>
        <Header />
        <BodySection/>
        <FeaturedCategories/>
        <FeaturedProducts />
        <Footer />
      </div>
    );
  }
  
  export default HomePage;
