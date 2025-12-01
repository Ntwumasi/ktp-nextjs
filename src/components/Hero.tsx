import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#111]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/HeroHeader.avif)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-[#2071fe] text-sm md:text-base font-medium tracking-wider mb-4">
          WELCOME TO KTP TRAINING
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          UNLOCK YOUR POTENTIAL
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Basketball Skills Training and Development in Wellesley, MA!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="bg-[#2071fe] text-white px-8 py-4 rounded text-sm font-semibold hover:bg-[#1a5fd4] transition-colors"
          >
            JOIN NOW
          </Link>
          <Link
            href="https://app.coachiq.io/ktptraining"
            target="_blank"
            className="border-2 border-white text-white px-8 py-4 rounded text-sm font-semibold hover:bg-white hover:text-[#111] transition-colors"
          >
            MEMBER LOGIN
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
