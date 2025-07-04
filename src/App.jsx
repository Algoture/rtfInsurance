import InsuranceProducts from "./components/InsuranceProducts";
import TrustedCompanies from "./components/TrustedCompanies";
import WhyChooseRTF from "./components/WhyChooseRTF";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer/Footer";
import Glimpses from "./components/Glimpses";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TrustedCompanies />
      <InsuranceProducts />
      <WhyChooseRTF />
      <Glimpses />
      <CTASection />
      <Footer  />
    </>
  );
}

export default App;
