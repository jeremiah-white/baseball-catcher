import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
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
        </div>
      </div>
      <Navigation />
    </header>
  );
}
