
export const metadata = {
  title: 'Training Programs | KTP Training',
  description: 'Explore our basketball training programs including individual skill sessions and group training sessions for athletes of all levels.',
};

const programs = [
  {
    title: 'Individual Skill Sessions',
    description:
      "Experience personalized coaching at its finest with KTP Training's Individual Skills Sessions. Tailored specifically to your needs and goals, these sessions offer focused attention from Kyle Thistle-Pierce himself.",
    features: [
      'One-on-one personalized attention',
      'Customized training plans',
      'Focus on your specific goals',
      'Flexible scheduling',
      'Detailed progress tracking',
    ],
  },
  {
    title: 'Group Skill Sessions',
    description:
      'Join our dynamic Group Training Sessions led by Kyle Thistle-Pierce, designed for high school and middle school athletes in the Natick area. These sessions foster teamwork, competition, and skill development.',
    features: [
      'Learn from peers',
      'Competitive environment',
      'Team-building skills',
      'Affordable pricing',
      'Fun and engaging atmosphere',
    ],
  },
];

export default function TrainingProgramsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2071fe] text-sm font-medium tracking-wider mb-3">
            OUR PROGRAMS
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            TRAINING PROGRAMS
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the training program that fits your needs and take your basketball skills to the next level.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-lg p-8 md:p-10 border border-[#333] hover:border-[#2071fe] transition-colors"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {program.title}
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {program.description}
                </p>
                <h3 className="text-white font-semibold mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300">
                      <svg
                        className="w-5 h-5 text-[#2071fe] mr-3 mt-0.5 flex-shrink-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kyle@ktp-training.com?subject=Free Session Request"
                  className="inline-block bg-[#2071fe] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-[#1a5fd4] transition-colors"
                >
                  GET STARTED
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose KTP Training?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expert Coaching', desc: 'Learn from experienced professionals' },
              { title: 'Personalized Plans', desc: 'Training tailored to your goals' },
              { title: 'Proven Results', desc: 'Track record of athlete improvement' },
              { title: 'Supportive Environment', desc: 'Positive and encouraging atmosphere' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#2071fe]/20 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
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
            Ready to Elevate Your Game?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Sign up today to schedule your FREE trial session!
          </p>
          <a
            href="mailto:kyle@ktp-training.com?subject=Free Session Request"
            className="inline-block bg-white text-[#2071fe] px-10 py-4 rounded text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            CLAIM FREE SESSION
          </a>
        </div>
      </section>
    </div>
  );
}
