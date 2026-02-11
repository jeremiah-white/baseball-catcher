import Image from "next/image";
import Link from "next/link";
import AdSpot from "@/components/AdSpot";

export default function Home() {
  return (
    <div className="content-wrapper">
      <aside className="left-sidebar">
        <AdSpot size="sidebar" />
      </aside>

      <div className="main-content">
        <h1 className="page-header">Baseball Catcher</h1>

        <dl className="content-section">
            <dt>Catchers Guide</dt>
            <dd>
              <Link href="/guide" className="feature-card__image">
                <Image
                  src="/images/chalkboard.jpg"
                  width={165}
                  height={115}
                  alt="Catchers Guide"
                  style={{ float: "left", marginRight: "1rem", marginBottom: "1rem" }}
                />
              </Link>
              Learn the ABC&apos;s of catching - anything and everything you ever wanted
              to know about the catching position.
              <br />
              <Link href="/guide" title="catchers_guide">
                Catchers Guide
              </Link>
              <br />
              <Link
                href="/images/Baseball_Catchers_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF Download - Catchers Guide
              </Link>
              <div style={{ clear: "both" }} />
            </dd>

            <dt>Catchers Gear</dt>
            <dd>
              <Link href="/gear" className="feature-card__image">
                <Image
                  src="/images/catchershelmetGreen.jpg"
                  width={165}
                  height={139}
                  alt="Catchers Gear"
                  style={{ float: "left", marginRight: "1rem", marginBottom: "1rem" }}
                />
              </Link>
              Looking for Catcher&apos;s Gear? Check out this section for more info on
              catchers gear.
              <br />
              <Link href="/gear" title="catchers_gear">
                Catchers Gear
              </Link>
              <div style={{ clear: "both" }} />
            </dd>

            <dt>Drills for Catchers</dt>
            <dd>
              <Link href="/drills" className="feature-card__image">
                <Image
                  src="/images/catcherBlocking.jpg"
                  width={165}
                  height={167}
                  alt="Catching Drills"
                  style={{ float: "left", marginRight: "1rem", marginBottom: "1rem" }}
                />
              </Link>
              Perfect your skills with an assortment of catching drills. Browse
              through a number of throwing, blocking, receiving, framing, fielding,
              and agility drills.
              <br />
              <Link href="/drills" title="drills">
                Catching Drills
              </Link>
              <div style={{ clear: "both" }} />
            </dd>

            <dt>Strength Training Programs</dt>
            <dd>
              <Link href="/strength-training" className="feature-card__image">
                <Image
                  src="/images/dumbbellsHomePage.jpg"
                  width={164}
                  height={195}
                  alt="Strength Training"
                  style={{ float: "left", marginRight: "1rem", marginBottom: "1rem" }}
                />
              </Link>
              Get faster and stronger. Develop your own strength training program.
              <br />
              <Link href="/strength-training" title="strength_training">
                Strength Training
              </Link>
              <div style={{ clear: "both" }} />
            </dd>
          </dl>
        </div>

      <aside className="right-sidebar">
        <AdSpot size="small" />
      </aside>
    </div>
  );
}
