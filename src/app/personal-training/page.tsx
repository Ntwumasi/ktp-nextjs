export const metadata = {
  title: 'Personal Training | KTP Training',
  description:
    'Personal training with Kyle at Pex Needham. Fixing pain and building strength all together. Individual and semi-private sessions available.',
};

const pricing = [
  {
    title: 'Personal Training',
    options: [
      { sessions: '1 Session', price: '$150' },
      { sessions: '5 Sessions', price: '$725' },
      { sessions: '10 Sessions', price: '$1,400' },
    ],
  },
  {
    title: 'Semi-Private Training',
    options: [{ sessions: '2-4 People', price: '$75 per person' }],
  },
];

export default function PersonalTrainingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2071fe] text-sm font-medium tracking-wider mb-3">
            PERSONAL TRAINING
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            FIX PAIN. BUILD STRENGTH.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            One-on-one and semi-private personal training sessions designed to
            fix pain and build strength all together.
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training Facility
            </h2>
            <p className="text-[#2071fe] text-xl font-semibold mb-2">
              Pex Needham
            </p>
            <p className="text-gray-300 text-lg">
              1451 Highland Ave, Needham
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Specialty
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At KTP Training, we specialize in fixing pain and building strength
              all together. Whether you&apos;re recovering from an injury, dealing
              with chronic pain, or looking to get stronger, Kyle&apos;s approach
              combines corrective exercise with strength training to get you
              moving and feeling your best.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((tier, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-lg p-8 md:p-10 border border-[#333] hover:border-[#2071fe] transition-colors"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {tier.title}
                </h3>
                <div className="space-y-4 mb-8">
                  {tier.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className="flex items-center justify-between border-b border-[#333] pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-300 text-base">
                        {option.sessions}
                      </span>
                      <span className="text-[#2071fe] text-xl font-bold">
                        {option.price}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:kyle@ktp-training.com?subject=Personal Training Inquiry"
                  className="inline-block w-full text-center bg-[#2071fe] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-[#1a5fd4] transition-colors"
                >
                  GET STARTED
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2071fe]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Train?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Reach out to schedule your first personal training session at Pex
            Needham.
          </p>
          <a
            href="mailto:kyle@ktp-training.com?subject=Personal Training Inquiry"
            className="inline-block bg-white text-[#2071fe] px-10 py-4 rounded text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            CONTACT KYLE
          </a>
        </div>
      </section>
    </div>
  );
}
