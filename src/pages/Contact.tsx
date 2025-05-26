import React, { useState } from "react";
import Navigation from "../components/Navigation";
import {
  FaCalendarAlt,
  FaBullseye,
  FaRocket,
  FaPhoneAlt,
  FaClipboardList,
  FaPlay,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { submitToAirtable, ContactFormData } from "../utils/airtable";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      projectDetails: formData.get("project") as string,
      timeline: formData.get("timeline") as string,
      referralSource: formData.get("referralSource") as string,
      budgetRange: formData.get("budgetRange") as string,
    };

    const result = await submitToAirtable(data);

    if (result.success) {
      setShowSuccessPopup(true);
      e.currentTarget.reset();
    } else {
      setSubmitStatus({
        type: "error",
        message:
          result.error ||
          "There was an error submitting your form. Please try again or contact us directly.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-orange-50">
      <Navigation />

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-6">
              We've received your information and will reach out within 24
              hours. In the meantime, you can schedule your discovery call
              directly:
            </p>
            <div className="space-y-4">
              <a
                href="https://calendar.app.google/ZZwDaxqDg9h3UZ426"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Schedule Discovery Call
              </a>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="block w-full text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready to
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                {" "}
                scale faster?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Book a free discovery call and let's discuss how we can automate
              your business and build your custom apps.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Get Started Today
                </h2>

                <div className="grid grid-cols-1 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-4">
                      <FaPhoneAlt className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Schedule a Call
                    </h3>
                    <p className="text-gray-600">
                      Book a free consultation to discuss your needs.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-4">
                      <FaClipboardList className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Define Scope</h3>
                    <p className="text-gray-600">
                      We'll outline the project scope and timeline.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-4">
                      <FaPlay className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Get Started</h3>
                    <p className="text-gray-600">
                      Begin your journey to automation success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Book Your Call
                </h3>
                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name{" "}
                      <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      placeholder="Your company (optional)"
                      name="company"
                      autoComplete="organization"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      placeholder="Your first name"
                      name="firstName"
                      autoComplete="given-name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      placeholder="Your last name"
                      name="lastName"
                      autoComplete="family-name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      placeholder="your@email.com"
                      name="email"
                      autoComplete="email"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      title="Please enter a valid email address (e.g., name@domain.com)"
                      onChange={(e) => {
                        const email = e.target.value.toLowerCase();
                        e.target.value = email;
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      placeholder="(123) 456-7890"
                      name="phone"
                      autoComplete="tel"
                      required
                      pattern="\(\d{3}\) \d{3}-\d{4}"
                      maxLength={14}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) {
                          const formatted = value.replace(
                            /(\d{3})(\d{3})(\d{4})/,
                            "($1) $2-$3"
                          );
                          e.target.value = formatted;
                        }
                      }}
                    />
                  </div>

                  {/* Honeypot field for bots */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What are you building?{" "}
                      <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                      name="project"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <div className="relative">
                      <select
                        name="timeline"
                        className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all appearance-none"
                        required
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="1 month">1 month</option>
                        <option value="2-3 months">2-3 months</option>
                        <option value="3+ months">3+ months</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      How did you find us?
                    </label>
                    <div className="relative">
                      <select
                        name="referralSource"
                        className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all appearance-none"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="Google Search">Google Search</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Referral">Referral</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Newsletter">Newsletter</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <div className="relative">
                      <select
                        name="budgetRange"
                        className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all appearance-none"
                        required
                      >
                        <option value="">Select budget range</option>
                        <option value="$5K - $10K">$5K - $10K</option>
                        <option value="$10K - $25K">$10K - $25K</option>
                        <option value="$25K - $50K">$25K - $50K</option>
                        <option value="$50K+">$50K+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Book Free Discovery Call"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              Prefer email? Reach out directly:
            </p>
            <a
              href="mailto:hello@codemeetsbagel.com"
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              hello@codemeetsbagel.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
