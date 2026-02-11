import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Framing a Pitch",
  description: "The catchers guide discusses the art of framing a pitch. Help get your pitcher more called strikes.",
  keywords: ["baseball", "catcher", "catching", "frame pitch", "framing pitches"],
};

export default function FramingPage() {
  return (
    <>
      <h1 className="page-header">Framing a Pitch</h1>

      <p>
        Framing is the art of making a pitch that is <u>near</u> (border line strike/ball) the zone appear to be a strike when in fact it may not be. A catcher, who can frame well, can be extremely helpful to a pitcher working the corners of the plate. Framing correctly is a difficult task and one that should be practiced during bullpen sessions and in drills.
      </p>

      <p>
        *See the <Link href="/guide/drills">Drills</Link> and <Link href="/guide/bullpens">Catching Bullpens</Link> sections for more info.
      </p>

      <p>
        Framing is a subtle movement of the wrist that drags the ball toward the strike zone. This slight movement occurs just as you catch the ball. The keyword here is <u><i>slight</i></u>. Do not frame a pitch more than a <u>few inches</u> or partial movement of the wrist. Umpires are not stupid or blind and will not be swayed to call a strike by some miraculous ball that changed direction and moved a foot to the right. The framing motion is smooth and should not be done in a jerking motion.
      </p>

      <p>
        For a pitch that is down in the zone and you are attempting to frame, catch it in the normal overhand position and then absorb or funnel it toward your stomach in a motion that is backward and up. Use your entire arm for this and not just your wrist. DO NOT flick your wrist up or catch it underhand if you are attempting to frame the low pitch. The reasoning from an umpire&apos;s perspective is that a ball that is caught underhand crossed the plate too low in the zone for it to be called a strike. It looks like a ball if you catch it underhand. In a perfect world, the way you catch a pitch should not matter, only where the pitch crosses through the strike zone. Catch the low pitch overhand.
      </p>

      <h3>Get Around the Ball</h3>
      <p>
        When I describe proper framing techniques to my catchers, I use the phrase &quot;get around the ball.&quot; Simply put, getting around the ball means catching the outside of the baseball and closing the four fingered part of the glove in the direction of the strike zone. The outside of the baseball is the side of the ball that is furthest away from the middle of the strike zone. Using this technique in conjunction with framing produces more strikes being called on borderline pitches.
      </p>

      <h3>Obvious Balls</h3>
      <p>
        There is <u>no reason</u> to frame a pitch that is an obvious ball. Catch the ball and throw it back to the pitcher.
      </p>

      <h3>Don&apos;t Show Up the Umpire!!!!</h3>
      <p>
        Never frame a pitch for more than a moment or two. Umpires are human and they make mistakes from time to time. They may miss a pitch now and then that should be called a strike. Remember, that if you are framing a pitch, the pitch is a borderline strike anyway. Showing up the umpire on a call that didn&apos;t go your way by holding your mitt where you caught the ball only causes more problems than it solves. The fans will start to get on the umpire for missing a call, which might bother the umpire. As a result, you are less likely to get borderline calls later in the game. Although an umpire should be impartial and consistent with his calls, he is human. Strike calls that he used to give you might now be called as balls.
      </p>

      <p>
        The best way to deal with a close pitch is to ask the umpire at a later time (next batter or inning) where was the pitch? In a friendly manner, tell him that you thought the pitch was pretty good. See the section on <Link href="/guide/rapport">umpire rapport</Link> for more info on catcher and umpire interaction.
      </p>

      <p>
        <br />
        <b>KEYS:</b> Toward the Zone, Smooth Movement, Slight Movement, Funnel to Belly if Low, Overhand, Only Strikes, Around the Ball, Hold for an Instant
      </p>
    </>
  );
}
