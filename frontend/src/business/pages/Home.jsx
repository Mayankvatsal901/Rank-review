import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <Features />

      <Testimonial />

      <Faq />

      <Cta />

      

    </div>
  );
}

export default Home;