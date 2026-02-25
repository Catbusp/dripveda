function About() {
  return (
    <section className="py-14 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        {/* <div className="w-full md:w-1/2">
          <img
            src="/images/about.jpg"
            alt="About"
            className="rounded-xl shadow-lg"
          />
        </div> */}

        {/* Content */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4  text-center">About Us</h2>
          <p className="text-gray-700 mb-4 text-center">
          DripVeda celebrates the simple joy of natural refreshment. Born out of a love for bold fruit flavours and time-honoured spice wisdom, we craft drink premixes that turn everyday hydration into something vibrant, no artificial colours, no cluttered ingredients, just real, nature-backed goodness in every drop. 
          </p>
          <p className="text-gray-700 text-center">
          Rip it, mix it, drip it, and enjoy a sip that’s both delicious and purposeful.          
          </p>
        </div>
      </div>
    </section>          
  );
}

export default About;

// https://numerique.vamtam.com/?storefront=envato-elements