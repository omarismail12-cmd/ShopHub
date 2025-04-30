import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-slate-900 text-gray-400 mt-auto">
      <footer className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white mb-4 text-lg font-semibold">ShopHub</h4>
            <p className="leading-relaxed text-sm">
              Your one-stop shop for all your shopping needs.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4 text-lg font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-white transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@shophub.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Shop Street, City, Country</li>
            </ul>
          </div>

          <div>
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

        <div className="text-center text-sm text-gray-500">
          © 2025 ShopHub. All rights reserved.
        </div>
      </footer>
    </section>
  );
}

export default Footer;
