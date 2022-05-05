import "./App.css";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import one from "./assets/1.png";
import two from "./assets/2.jpg";
import three from "./assets/3.jpg";

const card = [
  {
    img: one,
    rating: "5.0",
    reviews: "6",
    country: "USA",
    price: "$136",
    title: "Life lessons with Katie Zaferes",
  },
  {
    img: two,
    rating: "4.0",
    reviews: "30",
    country: "USA",
    price: "$125",
    title: "Learn wedding photography",
  },
  {
    img: three,
    rating: "4.8",
    reviews: "2",
    country: "USA",
    price: "$50",
    title: "Group Mountain Biking",
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="cards-grid">
        {card.map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
