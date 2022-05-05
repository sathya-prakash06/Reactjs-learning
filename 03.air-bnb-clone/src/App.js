import "./App.css";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { cardData } from "./data";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="cards-grid">
        {cardData.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
