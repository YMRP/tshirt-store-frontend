import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Advantages from "../components/Advantages";
import Opinions from "../components/Opinions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      className="flex min-h-screen bg-amber-100 w-full flex-col"
     
    >
      <Header />
      <>
        <Hero/>
        <FeaturedProducts/>
        <Advantages/>
        <Opinions/>
        <Footer/>
      </>
    </div>
  );
}
