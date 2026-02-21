import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#86C146] text-white py-6 text-center">
      <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
         <a
          href="https://www.instagram.com/dripvedaofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex gap-2 hover:text-gray-200 transition-colors"
          aria-label="Instagram"
        >
          Follow us
          <FaInstagram size={24} />
        </a>
        <p className="text-[12px]" >© {new Date().getFullYear()} Your Company. All rights reserved.</p>
       
      </div>
    </footer>
  );
}

export default Footer;