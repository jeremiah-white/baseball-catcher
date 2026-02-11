import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catcher Set Up Position",
  description: "When and where to set up as a baseball catcher.",
  keywords: ["baseball", "catcher", "catching", "catcher set up position"],
};

export default function SettingUpPage() {
  return (
    <>
      <h1 className="page-header">Where and When Should the Catcher Set Up?</h1>

      <p>
        Now that you have a solid stance, you need to learn where to position
        yourself in the catchers box in relation to the hitter. The catchers box
        is 8&apos; long by 43&quot; wide and is located directly behind home plate.
        The rules of baseball state that the catcher must have both feet inside
        or on the line of this box at the time of a pitch.
      </p>

      <h3>Relation to Hitter</h3>
      <p>
        Where does the catcher set up in relation to the hitter? On many
        occasions, I have seen catchers set up too far behind the hitter. This
        is a BAD HABIT. Ideally, you want to be as far forward toward home plate
        as possible without your mitt interfering with a batter&apos;s swing. The
        closer you can get toward your pitcher the easier you make it for the
        pitcher to hit his locations (shorter distance to throw the ball) and
        also you provide the umpire with a better opportunity to make accurate
        ball and strike calls. *KNOW YOUR HITTER: Certain hitters have a looping
        swing (especially at the younger ages). You need to set up a little
        further back than normal for these hitters or they will tip your mitt
        with their bat during a swing. This is{" "}
        <Link href="/guide/glossary" title="catcher's interference">
          catcher&apos;s interference
        </Link>
        . If you are unsure how close to set up to the batter, play it safe and
        stay back a little.
      </p>

      <h3>When To Set Up</h3>
      <p>
        Do not set up too early after giving your sign. This gives away pitch
        location. Opposing coaches will relay this information to the hitter or
        the hitter may peek back to see where you are sitting. Knowing pitch
        location helps a hitter. If the pitcher is in the windup, set up just as
        the pitcher is starting his windup. If the pitcher is in a stretch
        position use your judgment. You should move just before the pitcher is
        delivering the ball to the plate.
      </p>

      <p>
        <strong>KEYS:</strong> Be Forward, Catcher&apos;s Interference, Know the
        Hitter, Never Down the Middle, Off the Plate, Umpire&apos;s Zone
      </p>
    </>
  );
}
