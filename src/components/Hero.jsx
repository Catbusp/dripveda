import { useState } from "react";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    image: "/images/product1.png",
    video: "/videos/product1.mp4",
    title: "Rip. Mix. Sip.",
    description: "Nature in every drop.",
  },
  {
    id: 2,
    image: "/images/product2.png",
    video: "/videos/product2.mp4",
    title: "Rip. Mix. Sip.",
    description: "Nature in every drop.",
  },
  {
    id: 3,
    image: "/images/product3.png",
    video: "/videos/product3.mp4",
    title: "Rip. Mix. Sip.",
    description: "Nature in every drop.",
  },
  {
    id: 4,
    image: "/images/product4.png",
    video: "/videos/product4.mp4",
    title: "Rip. Mix. Sip.",
    description: "Nature in every drop.",
  },
];

function Hero() {
  const [activeProduct, setActiveProduct] = useState(products[0]);



  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prevProduct) => {
        const currentIndex = products.findIndex((p) => p.id === prevProduct.id);
        const nextIndex = (currentIndex + 1) % products.length;
        return products[nextIndex];
      });
    }, 5000); // Change product every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);




  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        src={activeProduct.video}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-end pb-24 h-full text-center px-6 text-white">
        <h1 className="text-2xl md:text-5xl font-bold mb-1 transition-all duration-500">
          {activeProduct.title}
        </h1>
        <p className="text-[22px] md:text-xl max-w-xl mb-6 transition-all duration-500">
          {activeProduct.description}
        </p>
        {/* <button className="bg-[#86C146] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Shop Now
        </button> */}
      </div>

      {/* Product Icons */}
      <div className="backdrop-blur-md b absolute bottom-0 py-4 left-0 right-0 flex justify-center gap-4 px-4 z-20 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center cursor-pointer"
        >
          
          <img
            key={product.id}
            src={product.image}
            alt=""
            onClick={() => setActiveProduct(product)}
            className={`h-16 w-16 object-contain cursor-pointer transition transform hover:scale-110 ${
              activeProduct.id === product.id ? "scale-130" : ""
            }`}
          />

<div className={`mt-2 h-[6px] w-10 rounded-full transition-all duration-300 ${activeProduct.id === product.id ? "bg-white opacity-100" : "bg-gray-400 opacity-0"}`}
             
            ></div>

          </div>
          
        ))}
      </div>

      
    </section>

  );
}

export default Hero;



