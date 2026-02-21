import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <Header onCTAClick={() => setIsModalOpen(true)} />
      <Hero />
      <About />
      <Footer />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;