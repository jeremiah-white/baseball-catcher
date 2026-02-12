"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", title: "baseball-catcher" },
  { href: "/guide", label: "Guide", title: "guide" },
  { href: "/gear", label: "Gear", title: "equipment" },
  { href: "/drills", label: "Drills", title: "drills" },
  { href: "/strength-training", label: "Strength Training", title: "strength_training" },
  { href: "/links", label: "Links", title: "baseball_links" },
  { href: "/contact", label: "Contact", title: "contact" },
];

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="main-nav">
      <ul className={`main-nav__list ${isOpen ? "main-nav__list--open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.href} className="main-nav__item">
            <Link
              href={item.href}
              className={`main-nav__link ${pathname === item.href ? "main-nav__link--active" : ""}`}
              title={item.title}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
