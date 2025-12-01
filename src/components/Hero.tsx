export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end md:items-center justify-center bg-[#111] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: 'url(/HeroHeader.avif)',
        }}
      />

      {/* Modern gradient overlay - darker at bottom for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-24 pt-32 md:py-0 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl md:max-w-2xl">
          {/* Accent line */}
          <div className="hidden md:block w-16 h-1 bg-[#2071fe] mb-6" />

          <p className="text-[#2071fe] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            Welcome to KTP Training
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
            Unlock Your
            <br />
            <span className="text-[#2071fe]">Potential</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-md leading-relaxed">
            Basketball Skills Training and Development in Wellesley, MA
          </p>

          {/* Buttons - full width on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="mailto:kyle@ktp-training.com?subject=Free Session Request"
              className="w-full sm:w-auto text-center bg-[#2071fe] text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#1a5fd4] transition-all hover:scale-105 active:scale-95"
            >
              GET STARTED FREE
            </a>
            <a
              href="https://app.coachiq.io/ktptraining"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center border-2 border-white/80 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-white hover:text-[#111] transition-all backdrop-blur-sm"
            >
              MEMBER LOGIN
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
