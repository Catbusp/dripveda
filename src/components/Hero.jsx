import { useState } from "react";

const products = [
  {
    id: 1,
    image: "/images/product1.png",
    video: "/videos/product1.mp4",
    title: "Pure Beetroot Power",
    description: "Boost energy and endurance naturally.",
  },
  {
    id: 2,
    image: "/images/product2.png",
    video: "/videos/product2.mp4",
    title: "Fresh Blueberry Vitality",
    description: "Antioxidant rich and refreshing.",
  },
  {
    id: 3,
    image: "/images/product3.png",
    video: "/videos/product3.mp4",
    title: "Zesty Lemon Ginger",
    description: "Cleanse and energize your body.",
  },
  {
    id: 4,
    image: "/images/product4.png",
    video: "/videos/product4.mp4",
    title: "Tropical Pineapple Boost",
    description: "Hydrate and recharge instantly.",
  },
];

function Hero() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

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
      <div className="relative z-10 flex flex-col items-center justify-end pb-20 h-full text-center px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 transition-all duration-500">
          {activeProduct.title}
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6 transition-all duration-500">
          {activeProduct.description}
        </p>
        {/* <button className="bg-[#86C146] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Shop Now
        </button> */}
      </div>

      {/* Product Icons */}
      <div className="backdrop-blur-md absolute bottom-0 py-4 left-0 right-0 flex justify-center gap-4 px-4 z-20">
        {products.map((product) => (
          <img
            key={product.id}
            src={product.image}
            alt=""
            onClick={() => setActiveProduct(product)}
            className={`h-16 w-16 object-contain cursor-pointer transition transform hover:scale-110 ${
              activeProduct.id === product.id ? "scale-110" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;