function About() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/about.jpg"
            alt="About"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            We build innovative solutions designed to enhance your digital experience.
          </p>
          <p className="text-gray-700">
            Our mission is to combine technology and creativity to deliver exceptional products.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;