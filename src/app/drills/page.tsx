import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catchers Drills",
  description: "Practice drills for baseball catchers to improve their skills.",
  keywords: ["baseball", "catcher", "drills", "practice", "training"],
};

export default function DrillsPage() {
  return (
    <>
      <h1 className="page-header">Catchers Drills</h1>

      <p>
        Perfect your skills with an assortment of catching drills. Browse through
        drills for every aspect of catching—from agility and receiving to blocking
        and throwing.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginTop: "1.5rem" }}>
        <Link href="/drills/agility" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/jumprope.jpg"
              width={101}
              height={100}
              alt="Agility Drills"
            />
            <p><strong>Agility Drills</strong></p>
          </div>
        </Link>

        <Link href="/drills/receiving" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/catcherReceiving.jpg"
              width={117}
              height={102}
              alt="Receiving Drills"
            />
            <p><strong>Receiving Drills</strong></p>
          </div>
        </Link>

        <Link href="/drills/framing" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/catcherFraming.jpg"
              width={99}
              height={100}
              alt="Framing Drills"
            />
            <p><strong>Framing Drills</strong></p>
          </div>
        </Link>

        <Link href="/drills/blocking" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/catcherBlockingDrills.jpg"
              width={100}
              height={100}
              alt="Blocking Drills"
            />
            <p><strong>Blocking Drills</strong></p>
          </div>
        </Link>

        <Link href="/drills/throwing" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/catcherThrowingDrills.jpg"
              width={100}
              height={99}
              alt="Throwing Drills"
            />
            <p><strong>Throwing Drills</strong></p>
          </div>
        </Link>

        <Link href="/drills/fielding" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/FieldingDrills.jpg"
              width={117}
              height={99}
              alt="Fielding Drills"
            />
            <p><strong>Fielding Drills</strong></p>
          </div>
        </Link>
      </div>
    </>
  );
}
