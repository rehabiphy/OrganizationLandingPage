import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Products from './components/Products.js';
import Vision from './components/Vision.js';
import Why from './components/Why.js';
import Partners from './components/Partners.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <div className="page">
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Products />
        <Vision />
        <Why />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
