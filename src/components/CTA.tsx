export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#111]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/HeroHeader.avif)',
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-[#2071fe] text-sm font-medium tracking-wider mb-3">
          IMPROVE YOUR GAME
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          JOIN OUR COMMUNITY!
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Sign up today to schedule a FREE trial session!
        </p>
        <a
          href="mailto:kyle@ktp-training.com?subject=Free Session Request"
          className="inline-block bg-[#2071fe] text-white px-10 py-4 rounded text-sm font-semibold hover:bg-[#1a5fd4] transition-colors"
        >
          GET STARTED
        </a>
      </div>
    </section>
  );
}
