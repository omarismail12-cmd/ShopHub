import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) {
      alert("Form reference not found.");
      return;
    }

    setSending(true);
    try {
      await emailjs.sendForm(
        "service_4icfaac",
        "template_a3lqulf",
        form.current,
        "3IJfpOD0eHNgGiZqJ"
      );
      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      alert("Failed to send the message, please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 flex justify-center">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section
          aria-label="Contact form"
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-black mb-6">Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail} noValidate>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block font-semibold text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                required
                aria-required="true"
                aria-describedby="name-desc"
              />
              <p id="name-desc" className="sr-only">
                Enter your full name
              </p>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                required
                aria-required="true"
                aria-describedby="email-desc"
              />
              <p id="email-desc" className="sr-only">
                Enter a valid email address
              </p>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message here..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-y"
                required
                aria-required="true"
                aria-describedby="message-desc"
              ></textarea>
              <p id="message-desc" className="sr-only">
                Enter your message to send us
              </p>
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-3 rounded-md font-semibold text-white transition duration-300 ${
                sending
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              aria-live="polite"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>

        {/* Contact Information & Business Hours */}
        <aside className="space-y-10">
          <section aria-label="Contact information" className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-black mb-6">Contact Information</h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <div className="flex items-center gap-4">
                <MdOutlineMailOutline className="text-blue-600" size={32} aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-black">Email</h3>
                  <p>support@shophub.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone className="text-blue-600" size={32} aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-black">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LuMapPin className="text-blue-600" size={32} aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-black">Address</h3>
                  <address className="not-italic">
                    123 Shop Street
                    <br />
                    City, Country
                  </address>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Business hours" className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-black mb-6">Business Hours</h2>
            <ul className="space-y-3 text-gray-800 text-lg">
              <li>
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
              </li>
              <li>
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
              </li>
              <li>
                <strong>Sunday:</strong> Closed
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
