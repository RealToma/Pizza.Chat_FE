import Hero from "./components/hero/Hero";
import Cards from "./components/cards/Cards";
import Marketing from "./components/marketing/Marketing";
import Steps from "./components/steps/Steps";
import Pricing from "./components/pricing/Pricing";
import Customers from "./components/customers/Customers";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex bg-hero-bg bg-16 bg-fixed   pb-9 min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Cards />
      <Marketing />
      <Steps />
      <Pricing />
      <Customers />
      <Footer />
    </main>
  );
}
