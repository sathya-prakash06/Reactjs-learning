import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ReactSection from "./components/ReactSection";

function App() {
  return (
    <div className="bg">
      <Navbar />
      <ReactSection />
      <Footer />
    </div>
  );
}

export default App;
