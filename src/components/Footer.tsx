import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#111] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/ktpLogo.webp"
                alt="KTP Training"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Basketball Skills Training and Player Development in Wellesley, MA
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                <a href="tel:508-808-9101" className="hover:text-[#2071fe] transition-colors">
                  508-808-9101
                </a>
              </p>
              <p>
                <a href="mailto:kyle@ktp-training.com" className="hover:text-[#2071fe] transition-colors">
                  kyle@ktp-training.com
                </a>
              </p>
              <p>Wellesley, MA & Surrounding Areas</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3 text-sm">
              <Link href="/" className="block text-gray-400 hover:text-[#2071fe] transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-[#2071fe] transition-colors">
                About
              </Link>
              <Link href="/training-programs" className="block text-gray-400 hover:text-[#2071fe] transition-colors">
                Training Programs
              </Link>
              <Link href="/sign-up" className="block text-gray-400 hover:text-[#2071fe] transition-colors">
                Sign Up
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} KTP Training. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built by{' '}
            <a
              href="https://kodedit.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2071fe] hover:underline"
            >
              Kodedit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
