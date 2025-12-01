import Link from 'next/link';

const programs = [
  {
    title: 'INDIVIDUAL SKILL SESSIONS',
    description:
      "Experience personalized coaching at its finest with KTP Training's Individual Skills Sessions. Tailored specifically to your needs and goals, these sessions offer focused attention from Kyle Thistle-Pierce himself.",
    href: '/training-programs',
  },
  {
    title: 'GROUP SKILL SESSIONS',
    description:
      'Join our dynamic Group Training Sessions led by Kyle Thistle-Pierce, designed for high school and middle school athletes in the Natick area. These sessions foster teamwork, competition, and skill development.',
    href: '/training-programs',
  },
];

export default function Programs() {
  return (
    <section className="py-20 md:py-32 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#2071fe] text-sm font-medium tracking-wider mb-3">
            EXPLORE OUR PROGRAMS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            DETAILED PROGRAMS & EXPERT COACHING
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-[#222] rounded-lg p-8 md:p-10 hover:bg-[#2a2a2a] transition-colors group"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#2071fe] transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                {program.description}
              </p>
              <Link
                href={program.href}
                className="inline-flex items-center text-[#2071fe] font-medium hover:text-white transition-colors"
              >
                LEARN MORE
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
