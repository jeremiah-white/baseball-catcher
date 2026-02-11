import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catcher Throwing Skills",
  description:
    "An introduction to throwing out baserunners and other throwing situations.",
  keywords: [
    "baseball",
    "catcher",
    "catching",
    "throwing",
    "throwing out baserunners",
  ],
};

export default function ThrowingPage() {
  return (
    <>
      <h1 className="page-header">Catcher Throwing Skills</h1>

      <Image
        src="/images/catcherThrowing.jpg"
        alt="Catcher Throwing"
        width={175}
        height={175}
        style={{ float: "right", marginLeft: "1rem" }}
      />

      <p>
        Throwing out potential base stealers is a fundamental skill that
        separates a good catcher from a great catcher. Professional scouts
        consider throwing ability (SAQ - strength, accuracy, and quickness) when
        determining which catchers to follow and potentially draft. Proper
        throwing technique enhances a player&apos;s chances for success when
        throwing out base runners.
      </p>

      <h4>Grip</h4>
      <p>
        A proper grip is essential for accurate throws. Grip the ball across the
        seams as if you were a pitcher throwing a four-seam fastball. Ideally,
        every throw you make should be with a four-seam grip. A good time to
        work on your grip is when you are warming up before practice or a game.
        With enough practice, you will automatically start gripping the ball in
        this manner. It will become second nature.
      </p>

      <h4>Stealing</h4>
      <p>
        A catcher&apos;s ability to throw out runners attempting to steal is a
        huge defensive asset. Not only do you keep runners out of scoring
        position, but also you force the other team to play station to station
        (base to base), hit and run, or bunt a runner into scoring position. A
        good throwing catcher at the Major League level only throws out roughly
        35% of all attempted base stealers. The main reason for this low success
        rate is that bases are mostly stolen off pitchers and not catchers. To
        have success throwing out runners, you need to be quick and have a
        strong accurate throw.
      </p>

      <p>Click the images to find out more about throwing out base runners!</p>

      <div style={{ display: "flex", gap: "1.5rem", margin: "1.5rem 0" }}>
        <Link href="/guide/throwing-secondbase">
          <Image
            src="/images/stealing2nd.gif"
            alt="Throwing to Second Base"
            width={150}
            height={100}
          />
        </Link>
        <Link href="/guide/throwing-thirdbase">
          <Image
            src="/images/stealing3rd.gif"
            alt="Throwing to Third Base"
            width={150}
            height={100}
          />
        </Link>
      </div>

      <p>
        Interested in learning about other throwing situations like, pick-offs
        and fielding batted balls? See{" "}
        <Link href="/guide/other-throws">other throws</Link>!
      </p>

      <p>
        <strong>KEYS:</strong> Grip across seams, Rake to Position, Quick
        Transfer and Release, Proper Footwork, 3 Throwing Styles, Clear Hitter,
        Clear Throwing Lane, Scoop (Fielding), Bare Hand, Snap Throw, Back to
        Pitcher with Authority
      </p>
    </>
  );
}
