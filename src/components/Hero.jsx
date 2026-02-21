import { useState } from "react";

const products = [
  {
    id: 1,
    image: "/images/product1.png",
    video: "/videos/product1.mp4",
  },
  {
    id: 2,
    image: "/images/product2.png",
    video: "/videos/product2.mp4",
  },
  {
    id: 3,
    image: "/images/product3.png",
    video: "/videos/product3.mp4",
  },
  {
    id: 4,
    image: "/images/product4.png",
    video: "/videos/product4.mp4",
  },
];

function Hero() {
  const [activeVideo, setActiveVideo] = useState(products[0].video);

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        key={activeVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onEnded={(e) => e.currentTarget.play()}
        className="absolute inset-0 w-full h-full object-cover  "
      >
        <source src={activeVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Product Options */}
      <div className="absolute bottom-6 w-full flex justify-center gap-4 px-4">
        {products.map((product) => (
          <img
            key={product.id}
            src={product.image}
            alt=""
            onClick={() => setActiveVideo(product.video)}
            className="h-16 w-16 object-contain cursor-pointer hover:scale-110 transition"
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;