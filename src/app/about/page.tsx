import Link from 'next/link';

export const metadata = {
  title: 'About | KTP Training',
  description: 'Learn about KTP Training and our mission to empower basketball athletes through dedicated coaching and personalized training.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2071fe] text-sm font-medium tracking-wider mb-3">
            ABOUT US
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            GET TO KNOW KTP TRAINING
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Dedicated to developing basketball players and building character on and off the court.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                At KTP Basketball, our mission is to empower athletes through dedicated coaching and
                personalized training. We strive to exceed every athlete&apos;s expectations by cultivating
                not only their basketball skills but also their confidence and passion for the game.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our commitment goes beyond the court, aiming to develop well-rounded individuals who
                embody perseverance, sportsmanship, and a lifelong love for basketball. By fostering
                a supportive and challenging environment, we ensure that each athlete reaches their
                full potential and achieves success both on and off the court.
              </p>
            </div>
            <div className="relative aspect-square bg-[#333] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Basketball training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Your Coach
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kyle Thistle-Pierce brings passion, experience, and dedication to every training session.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-[#222] rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">Kyle Thistle-Pierce</h3>
            <p className="text-[#2071fe] text-sm mb-6">Head Coach & Founder</p>
            <p className="text-gray-300 leading-relaxed">
              Kyle is dedicated to helping athletes of all levels improve their basketball skills
              and reach their full potential. With a focus on fundamentals, game-like drills, and
              personalized attention, Kyle creates an environment where players can grow both
              technically and mentally.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2071fe]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule your free trial session today and take the first step toward improving your game.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-white text-[#2071fe] px-10 py-4 rounded text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            CLAIM FREE SESSION
          </Link>
        </div>
      </section>
    </div>
  );
}
