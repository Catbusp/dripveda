function Header({ onCTAClick }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <img src="/images/logo.png" alt="Logo" className="h-16" />

        {/* Nav (hidden on mobile) */}
        {/* <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav> */}

        {/* CTA */}
        <button
          onClick={onCTAClick}
          className="bg-[#86C146] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#86c146dd] transition"
        >
          Get early access
        </button>
      </div>
    </header>
  );
}

export default Header;