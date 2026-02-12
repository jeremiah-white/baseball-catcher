"use client";

import Link from "next/link";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-description">
        <div className="site-description__content">
          Catchers: Tips, Drills, Information, Catching Equipment, Catchers Gear
        </div>
      </div>
      <div className="site-name">
        <div className="site-name__content">
          <Link href="/">Baseball-Catcher.com</Link>
          <button
            className="site-name__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>
        </div>
      </div>
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
}
