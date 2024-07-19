import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects, PricingPlans } from './components';
import { StarsCanvas } from "../canvas/StarsCanvas";
import SecondaryNav from './components/SecondaryNav';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Projects />
        <PricingPlans />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="relative z-0 flex justify-center items-center h-screen">
          <SecondaryNav />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
