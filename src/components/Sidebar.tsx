"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLink {
  href: string;
  label: string;
}

interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

interface SidebarProps {
  sections: SidebarSection[];
  className?: string;
}

export default function Sidebar({ sections, className = "" }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`sidebar ${className}`}>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="sidebar__section-title">{section.title}</div>
          <ul className="sidebar__list">
            {section.links.map((link) => (
              <li key={link.href} className="sidebar__item">
                <Link
                  href={link.href}
                  className={`sidebar__link ${
                    pathname === link.href ? "sidebar__link--active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {sectionIndex < sections.length - 1 && (
            <div className="sidebar__divider" />
          )}
        </div>
      ))}
    </aside>
  );
}
