import { useState } from "react";
import emailjs from "@emailjs/browser";

function Modal({ onClose }) {
  const [formData, setFormData] = useState({
    floating_first_name: "",
    floating_phone: "",
    floating_email: "",
    flavor: "",
    floating_Quantity: "",
    message: "",
    street_address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_hsj3gyh",
        "template_zlf6nnl",
        formData,
        "Bh_9DyMEo8DkVXycy"
      );

      alert("Message sent successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h3 className="text-xl font-medium mb-1 ">
          Limited early access slots available.
        </h3>
        <h3 className="text-sm mb-4 text-gray-500">
          Enter your details to reserve your pre-order.
        </h3>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                required
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#86C146] peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#86C146] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="floating_phone"
                required
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#86C146] peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#86C146] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone number
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              required
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#86C146] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#86C146] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
          </div>

          {/* New Address Fields */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="street_address"
              required
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#86C146] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#86C146] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Street address *
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="apartment"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#86C146] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#86C146] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Apartment, suite, unit, etc. (optional)
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="city"
                required
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#86C146] peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#86C146] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Town / City *
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="zip"
                required
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#86C146] peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#86C146] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Postcode / ZIP *
              </label>
            </div>
          </div>

          <div className="w-full mb-5">
            <label className="block mb-2 text-sm font-medium text-heading">
              State / County *
            </label>
            <select
              name="state"
              required
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#86C146]"
            >
              <option value="">Select an option…</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Pondicherry (Puducherry)">Pondicherry (Puducherry)</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          {/* End of Address Fields */}

          <div className="w-full mb-5">
            <label className="block mb-2 text-sm font-medium text-heading">
              Select Flavor
            </label>

            <select
              name="flavor"
              required
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#86C146]"
            >
              <option value="">Choose an option</option>
              <option value="BEETROOT">BEETROOT</option>
              <option value="BLUEBERRY">BLUEBERRY</option>
              <option value="LEMON_GINGER">LEMON GINGER</option>
              <option value="PINEAPPLE">PINEAPPLE</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="floating_Quantity"
                required
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#86C146] peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#86C146] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Quantity
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="message"
                rows="4"
                required
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#86C146]"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-[#86C146] w-full rounded-xl px-4 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;