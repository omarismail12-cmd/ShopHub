
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-slate-900 text-gray-400 py-16 px-8">
      <footer>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8">
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-white mb-4 text-lg font-semibold">ShopHub</h4>
            <p>Your one-stop shop for all your shopping needs.</p>
          </div>

          <div className="flex flex-col min-w-[150px]">
            <h4 className="text-white mb-4 text-lg font-semibold">
              Quick Links
            </h4>
            <a href="/" className="block mb-2 hover:text-white">
              Home
            </a>
            <a href="/categories" className="block mb-2 hover:text-white">
              Categories
            </a>
            <a href="/contact" className="block mb-2 hover:text-white">
              Contact
            </a>
          </div>

          <div className="flex flex-col min-w-[150px]">
            <h4 className="text-white mb-4 text-lg font-semibold">Contact</h4>
            <p className="mb-2">Email: support@shophub.com</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Address: 123 Shop Street, City, Country</p>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h4 className="text-white mb-4 text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-white"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-t border-slate-700 my-8" />

        <div className="text-center text-sm">
          © 2024 ShopHub. All rights reserved.
        </div>
      </footer>
    </section>
  );
}

export default Footer;