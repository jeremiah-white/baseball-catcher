import type { Metadata } from "next";
import AdSpot from "@/components/AdSpot";

export const metadata: Metadata = {
  title: "Baseball Links and Resources",
  description:
    "Collection of useful baseball links and resources for catchers and players.",
  keywords: ["baseball", "catcher", "links", "resources", "baseball websites"],
};

export default function LinksPage() {
  return (
    <div className="content-wrapper">
      <aside className="left-sidebar">
        <div className="sidebar-section">
          <h3>Link Exchange</h3>
          <p>
            Baseball-Catcher.com is open to reciprocal link exchanges with
            baseball-related websites. If you are interested in exchanging
            links, please{" "}
            <a href="/contact">contact us</a>.
          </p>
        </div>
        <AdSpot size="sidebar" />
      </aside>

      <div className="main-content">
        <h1 className="page-header">Baseball Links and Resources</h1>

        <h2>Baseball</h2>
          <ul className="link-list">
            <li>
              <a
                href="https://hsbaseballweb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                High School Baseball Web
              </a>{" "}
              — An internet home for high school baseball players, coaches,
              parents, and fans.
            </li>
          </ul>

          <h2>Catching</h2>
          <ul className="link-list">
            <li>
              <a
                href="https://www.baseballcatchers.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Encyclopedia of Baseball Catchers
              </a>{" "}
              — An outstanding site devoted to anything and everything about
              catchers.
            </li>
            <li>
              <a
                href="https://www.catchingcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                New England Catching Camp
              </a>{" "}
              — A camp in New England devoted to catching.
            </li>
          </ul>

          <h2>Baseball Forums</h2>
          <ul className="link-list">
            <li>
              <a
                href="https://www.baseball-fever.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baseball Fever
              </a>{" "}
              — Discuss anything and everything baseball related.
            </li>
          </ul>

          <h2>Equipment</h2>
          <ul className="link-list">
            <li>
              <a
                href="https://www.baseballgloves.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BaseballGloves.com
              </a>{" "}
              — Find a new mitt or read about caring for or breaking in a new
              one.
            </li>
            <li>
              <a
                href="https://www.justbats.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JustBats.com
              </a>{" "}
              — Looking for a bat? Find it here.
            </li>
            <li>
              <a
                href="https://www.justballgloves.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JustBallgloves.com
              </a>{" "}
              — Need a glove? Every brand is here.
            </li>
          </ul>

          <h2>Drills and Tips</h2>
          <ul className="link-list">
            <li>
              <a
                href="https://www.baseballtips.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BaseballTips.com
              </a>{" "}
              — A wide range of tips, drills, and articles covering every facet
              of the game.
            </li>
            <li>
              <a
                href="https://www.qcbaseball.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                QCBaseball.com
              </a>{" "}
              — An outstanding site devoted to instruction with guides, drills,
              and articles about baseball.
            </li>
          </ul>

          <h2>Baseball Blogs</h2>
          <ul className="link-list">
            <li>
              <a
                href="https://www.onbaseball.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OnBaseball.com
              </a>{" "}
              — Interesting articles about baseball, including product, book,
              bat, and glove reviews.
            </li>
          </ul>

          <h2>Other Baseball Resources</h2>
          <ul className="link-list">
            <li>
              <a
                href="https://www.masterpitch.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Master Pitching Machine
              </a>{" "}
              — World leader in the design and production of commercial pitching
              machines and batting cage equipment.
            </li>
          </ul>

          <p className="mt-8 text-sm text-gray-600">
            Found a broken link?{" "}
            <a href="/contact">Let us know</a> and we&apos;ll fix it.
          </p>
        </div>

      <aside className="right-sidebar">
        <AdSpot size="small" />
      </aside>
    </div>
  );
}
