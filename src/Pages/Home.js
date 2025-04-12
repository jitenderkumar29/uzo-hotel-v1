import About from "../Components/_About";
import Contact from "../Components/_Contact";
import Feature from "../Components/_Feature";
import Features from "../Components/_Features";
import Footer from "../Components/_Footer";
import FooterTop from "../Components/_FooterTop";
import Form from "../Components/_Form";
import SweetStories from "../Components/_SweetStories";
import Header from "../Components/_Header";
import Hero from "../Components/_Hero";
import HowItWorks from "../Components/_HowItWorks";
import Sort from "../Components/_Sort";
import PopularDestination from "../Components/popularDestination/PopularDestination";
import WorldDestination from "../Components/worldDestination/WorldDestination";
import AddOns from "../Components/addOns/AddOns";
import InternationalDestination from "../Components/internationalDestination/InternationalDestination";
import SpritualDestination from "../Components/spiritualDestination/SpritualDestination";
import GalleryDestination from "../Components/galleryDestination/GalleryDestination";
import HeroGallary from "../Components/heroGallary/HeroGallary";
import ImageLayouts from "../Components/imageLayouts/ImageLayouts";
import PrepareToTravel from "../Components/prepareToTravel/PrepareToTravel";
import UzoOfferCard from "../Components/uzoOfferCard/UzoOfferCard";
// import AddOns2 from "../Components/addOns2/AddOns2";
// import UzoOfferCard from "../Components/uzoOfferCard/UzoOfferCard";
// import AirIndiaGallery from "../Components/airIndiaGallery/AirIndiaGallery";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <PopularDestination />
      {/* <UzoOfferCard /> */}
      <InternationalDestination />
      <SpritualDestination />
      {/* <GalleryDestination /> */}
      <ImageLayouts />
      {/* <AirIndiaGallery /> */}
      <HeroGallary />
      <PrepareToTravel />
      {/* <WorldDestination /> */}
      <UzoOfferCard />
      {/* <AddOns2 /> */}
      {/* <AddOns /> */}
      {/* <HowItWorks /> */}
      {/* <About /> */}
      {/* <Features /> */}
      {/* <SweetStories /> */}
      {/* <Form /> */}
      {/* <Sort /> */}
      {/* <Feature /> */}
      {/* <FooterTop /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
