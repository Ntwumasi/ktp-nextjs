export const metadata = {
  title: 'Sign Up | KTP Training',
  description:
    'Get in touch with KTP Training. Reach out to schedule your free trial session.',
};

export default function SignUpPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2071fe] text-sm font-medium tracking-wider mb-3">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            SIGN UP TODAY
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to take your game to the next level? Reach out to schedule
            your FREE trial session.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-[#222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <a
              href="/claim-free-session"
              className="bg-[#111] rounded-lg p-8 md:p-10 border border-[#333] hover:border-[#2071fe] transition-colors group text-center"
            >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#2071fe] transition-colors">
                Email Us
              </h2>
              <p className="text-[#2071fe] text-lg font-medium mb-2">
                kyle@ktp-training.com
              </p>
              <p className="text-gray-400 text-sm">
                We&apos;ll get back to you within 24 hours
              </p>
            </a>

            {/* Phone Card */}
            <a
              href="tel:508-808-9101"
              className="bg-[#111] rounded-lg p-8 md:p-10 border border-[#333] hover:border-[#2071fe] transition-colors group text-center"
            >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#2071fe] transition-colors">
                Call or Text
              </h2>
              <p className="text-[#2071fe] text-lg font-medium mb-2">
                508-808-9101
              </p>
              <p className="text-gray-400 text-sm">
                Available for calls and texts
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            What to Expect
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Reach Out',
                desc: 'Send us an email or give us a call to get started.',
              },
              {
                step: '2',
                title: 'Free Trial',
                desc: 'Schedule your complimentary first session with Kyle.',
              },
              {
                step: '3',
                title: 'Level Up',
                desc: 'Choose a program and start improving your game.',
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="w-12 h-12 bg-[#2071fe] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2071fe]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your First Session is Free
          </h2>
          <p className="text-white/90 text-lg mb-8">
            No commitment needed. Come see what KTP Training is all about.
          </p>
          <a
            href="/claim-free-session"
            className="inline-block bg-white text-[#2071fe] px-10 py-4 rounded text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            CLAIM FREE SESSION
          </a>
        </div>
      </section>
    </div>
  );
}
