import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ready Stance",
  description: "Learn the proper ready stance for catchers with runners on base.",
  keywords: ["baseball", "catcher", "ready stance", "catching stance", "throwing position"],
};

export default function StanceReadyPage() {
  return (
    <>
      <h1 className="page-header">The Ready Stance</h1>

      <Image
        src="/images/readyStance2.jpg"
        width={250}
        height={300}
        alt="Ready Stance"
        style={{ float: "right", marginLeft: "1rem", marginBottom: "1rem" }}
      />

      <p>
        <span style={{ fontSize: "1.25rem" }}>T</span>he ready stance is used when
        there are runners on base or two strikes on the batter. In these
        situations, you need to be prepared to block a wild pitch or make a quick
        throw.
      </p>

      <h4>Body Position</h4>
      <p>
        From the <Link href="/guide/stance-relaxed">relaxed stance</Link>, raise
        your butt slightly so your thighs are about parallel to the ground. Your
        weight should shift to the balls of your feet. Stay low, but be athletic
        and ready to move.
      </p>

      <h4>Feet Position</h4>
      <p>
        Your feet should be slightly wider than shoulder-width, with your throwing
        side foot slightly back. Your weight is on the balls of your feet, ready
        to explode in any direction. You should be able to drop to block or spring
        up to throw immediately.
      </p>

      <h4>Arms and Glove</h4>
      <p>
        Present a low target with your glove extended toward the pitcher. Keep
        your arm relaxed but ready. Your elbow should be slightly bent, not locked
        out.
      </p>

      <h4>Throwing Hand</h4>
      <p>
        This is the key difference from the relaxed stance. Your throwing hand
        should be in a fist, positioned behind your mitt. When you receive the
        pitch, your hand is right there to grab the ball for a quick transfer and
        throw.
      </p>

      <h4>Mental Preparation</h4>
      <p>
        In the ready stance, your mind should also be ready. Know where the
        runners are. Know the count. Anticipate where the pitch might go if it&apos;s
        in the dirt. Be ready for anything.
      </p>

      <p>
        <strong>KEYS:</strong> Weight on Balls of Feet, Butt Raised, Throwing Hand
        Ready, Low Target, Mentally Prepared
      </p>
    </>
  );
}
