'use client';

import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-[#111] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-[#2071fe]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-[#2071fe]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-gray-300 mb-8">
            Your request has been submitted. We&apos;ll be in touch soon to schedule your free trial session.
          </p>
          <a
            href="/"
            className="inline-block bg-[#2071fe] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-[#1a5fd4] transition-colors"
          >
            BACK TO HOME
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2071fe] text-sm font-medium tracking-wider mb-3">
            GET STARTED
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            CLAIM YOUR FREE SESSION
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Fill out the form below to schedule your complimentary trial session and start your
            basketball training journey.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#222]">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="program" className="block text-white text-sm font-medium mb-2">
                Interested Program *
              </label>
              <select
                id="program"
                name="program"
                required
                value={formData.program}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#333] rounded px-4 py-3 text-white focus:outline-none focus:border-[#2071fe] transition-colors"
              >
                <option value="">Select a program</option>
                <option value="individual">Individual Skill Sessions</option>
                <option value="group">Group Skill Sessions</option>
                <option value="both">Both Programs</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors resize-none"
                placeholder="Tell us about your goals, experience level, or any questions you have"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2071fe] text-white px-8 py-4 rounded text-sm font-semibold hover:bg-[#1a5fd4] transition-colors"
            >
              SUBMIT REQUEST
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-[#333]">
            <p className="text-center text-gray-400 mb-6">Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
              <a
                href="tel:508-808-9101"
                className="text-white hover:text-[#2071fe] transition-colors"
              >
                508-808-9101
              </a>
              <a
                href="mailto:kyle@ktp-training.com"
                className="text-white hover:text-[#2071fe] transition-colors"
              >
                kyle@ktp-training.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
