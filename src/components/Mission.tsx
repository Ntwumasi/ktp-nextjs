import Link from 'next/link';
import Image from 'next/image';

export default function Mission() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - shows first on mobile, left on desktop */}
          <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-[#222] rounded-lg overflow-hidden order-1 md:order-1">
            <Image
              src="/kp.jpg"
              alt="Kyle Thistle-Pierce - Basketball Coach"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left order-2 md:order-2">
            <p className="text-[#2071fe] text-sm font-medium tracking-wider mb-3">
              GET TO KNOW US
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              OUR MISSION
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              At KTP Basketball, our mission is to empower athletes through dedicated coaching and
              personalized training. We strive to exceed every athlete&apos;s expectations by cultivating
              not only their basketball skills but also their confidence and passion for the game.
              Our commitment goes beyond the court, aiming to develop well-rounded individuals who
              embody perseverance, sportsmanship, and a lifelong love for basketball. By fostering
              a supportive and challenging environment, we ensure that each athlete reaches their
              full potential and achieves success both on and off the court.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[#2071fe] text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-sm font-semibold hover:bg-[#1a5fd4] transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
