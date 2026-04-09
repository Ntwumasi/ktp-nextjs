'use client';

import { useState } from 'react';

export default function ClaimFreeSessionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    goals: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent('Free Session Request');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAge: ${formData.age}\nGoals: ${formData.goals}\nLocation: ${formData.location}`
    );

    window.location.href = `mailto:kyle@ktp-training.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
            Fill out the form below and we&apos;ll get you scheduled for your
            complimentary first session.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#222]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-[#111] rounded-lg p-8 md:p-12 border border-[#2071fe] text-center">
              <div className="w-16 h-16 bg-[#2071fe]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#2071fe]"
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
              <h2 className="text-2xl font-bold text-white mb-4">
                Thank You!
              </h2>
              <p className="text-gray-300 mb-2">
                Your email client should have opened with your information ready
                to send.
              </p>
              <p className="text-gray-400 text-sm">
                If it didn&apos;t open, email us directly at{' '}
                <a
                  href="mailto:kyle@ktp-training.com"
                  className="text-[#2071fe] hover:underline"
                >
                  kyle@ktp-training.com
                </a>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#111] rounded-lg p-8 md:p-12 border border-[#333] space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#222] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#222] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#222] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors"
                  placeholder="(555) 555-5555"
                />
              </div>

              {/* Age */}
              <div>
                <label
                  htmlFor="age"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Age *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="5"
                  max="99"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full bg-[#222] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors"
                  placeholder="Athlete's age"
                />
              </div>

              {/* Goals */}
              <div>
                <label
                  htmlFor="goals"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Training Goals *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={3}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full bg-[#222] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors resize-none"
                  placeholder="What are you looking to improve? (e.g., ball handling, shooting, conditioning)"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-[#222] border border-[#333] rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2071fe] transition-colors"
                  placeholder="Your city/town (e.g., Wellesley, Natick, Needham)"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2071fe] text-white px-8 py-4 rounded text-sm font-semibold hover:bg-[#1a5fd4] transition-colors mt-4"
              >
                CLAIM FREE SESSION
              </button>

              <p className="text-gray-500 text-xs text-center">
                This will open your email client with your information ready to
                send to Kyle.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
