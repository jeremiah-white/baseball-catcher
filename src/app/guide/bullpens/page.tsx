import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Catching Bullpens",
  description: "The catchers guide discusses the role and responsibilities of a catcher when working in the bullpen.",
  keywords: ["baseball", "catcher", "catching", "catching bullpens"],
};

export default function BullpensPage() {
  return (
    <>
      <h1 className="page-header">Catching Bullpens</h1>

      <Image
        src="/images/lieberthal.jpg"
        width={200}
        height={200}
        alt="Catcher"
        style={{ float: "right", marginLeft: "1rem", marginBottom: "1rem" }}
      />

      <p>
        Catching bullpens is certainly not the most glorious job a catcher performs. Bullpens usually consist of long hours of squatting in the pen while pitchers use YOU to work on THEIR game. Actually, catching bullpens, if taken seriously, is one of the most underutilized times during practice where catchers can actually work on their game. Catchers working in the bullpen should be in full gear at all times. <b>All catchers, even the starters, should spend time working in the bullpen.</b>
      </p>

      <h3>Take advantage of your time in the pen.</h3>
      <p>
        Listen to your pitching coach talk to his pitchers. You can pick up a lot of valuable information about pitching and what pitchers are trying to do with certain pitches, counts, and hitters. Some of the best pitching coaches and coaches in general were catchers at one time. Catchers have an opportunity to gather information on every aspect of the game.
      </p>

      <h3>Do not set up down the middle.</h3>
      <p>
        Don&apos;t do it during a game and don&apos;t do it catching a bullpen session. Work the corners of the plate. The pitching coach should have you alternating from side to side of the plate (working inside and out to a right handed batter) in a series of pitches. Usually, you will receive two or more pitches in one location and then be asked to move. If your coach asks you to set up right down the middle, DO IT, but remember to off-set an inch or two from the exact middle. Many times the pitching coach may ask you to set down the middle if the pitchers are working on throwing breaking balls for strikes.
      </p>

      <h3>Pay attention to what the pitchers are throwing.</h3>
      <p>
        Use this knowledge in the game. What is their best pitch? How are certain pitches moving? Does this pitcher have a nasty slider that you need to be aware of (blocking)? Is a certain pitcher wild when throwing a changeup or other pitch? This is all useful game information of which you should be aware and put to use.
      </p>

      <h3>Work on receiving and framing pitches.</h3>
      <p>
        On average, you will see a couple of hundred pitches during a bullpen session (multiple pitchers). Be soft with your hands. Work on receiving and framing every bullpen session. *See the sections on <Link href="/guide/receiving">receiving</Link> and <Link href="/guide/framing">framing</Link> pitches for more information.
      </p>

      <h3>Work on Sticking Strikes.</h3>
      <p>
        One of my pet peeves is seeing catchers drop would-be strikes out of the strike zone and the pitches end up being called balls. Catchers have a tendency to do this with pitches in the lower third of the zone and with breaking balls. Stick the strike. Do not let the pitch&apos;s momentum move the ball from the zone. Work on sticking strikes every bullpen session.
      </p>

      <h3>Work on Blocking.</h3>
      <p>
        Pitchers are not perfect even though they sometimes tend to think so. Occasionally, they will bounce pitches in the dirt. Here is your chance to work on those blocking skills. In-season, set aside at least two bullpen sessions a week to work on your <Link href="/guide/blocking">blocking</Link>. Out of season or before your in-season schedule begins; you should work on blocking almost every day if you want to be good.
      </p>

      <p>
        <b>KEYS:</b> Work on Your Game, Blocking, Receiving, Framing
      </p>
    </>
  );
}
