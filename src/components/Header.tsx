'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'TRAINING PROGRAMS', href: '/training-programs' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/ktpLogo.webp"
              alt="KTP Training"
              width={150}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-[#2071fe] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/sign-up"
              className="bg-[#2071fe] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#1a5fd4] transition-colors"
            >
              CLAIM FREE SESSION
            </Link>
            <Link
              href="https://app.coachiq.io/ktptraining"
              target="_blank"
              className="border border-white text-white px-6 py-2 rounded text-sm font-medium hover:bg-white hover:text-[#111] transition-colors"
            >
              MEMBER LOGIN
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/ktpLogo.webp"
              alt="KTP Training"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#222]">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-white hover:text-[#2071fe] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Link
                href="/sign-up"
                className="block bg-[#2071fe] text-white px-6 py-3 rounded text-center text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                CLAIM FREE SESSION
              </Link>
              <Link
                href="https://app.coachiq.io/ktptraining"
                target="_blank"
                className="block border border-white text-white px-6 py-3 rounded text-center text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                MEMBER LOGIN
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
