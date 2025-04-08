import { Navigate, useParams } from "react-router-dom";
import { useStore } from "../Context/AppContext";

import About from "../Components/_About";
import Contact from "../Components/_Contact";
import Feature from "../Components/_Feature";
import Footer from "../Components/_Footer";
import FooterTop from "../Components/_FooterTop";
import Form from "../Components/_Form";
import Features from "../Components/_Features";
import SweetStories from "../Components/_SweetStories";
import Header from "../Components/_Header";
import Hero from "../Components/_Hero";
import HowItWorks from "../Components/_HowItWorks";
import Sort from "../Components/_Sort";

const States = () => {
  const { find } = useParams();
  const { matrimonyType } = useStore();

  if (matrimonyType[find]) {
    return (
      <>
        <Header />
        <Hero data={matrimonyType[find]} />
        <HowItWorks />
        <About data={matrimonyType[find]} />
        <Features />
        <SweetStories data={{ text: matrimonyType[find].name }} />
        <Form data={{ name: matrimonyType[find].name }} />
        <Sort />
        <Feature />
        <FooterTop data={{ name: matrimonyType[find].name }} />
        <Contact />
        <Footer />
      </>
    );
  } else {
    return <Navigate to={"/"} />;
  }
};

export default States;
