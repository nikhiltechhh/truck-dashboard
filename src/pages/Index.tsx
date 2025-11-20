import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Cart from "@/components/Cart";
import Contact from "@/components/Contact";
import WhatsApp from "@/components/WhatsApp";
import Footer from "@/components/Footer";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Cart />
      <Contact />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
