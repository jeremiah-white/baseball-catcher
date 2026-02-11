import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Throwing to Second Base",
  description: "Techniques for throwing out runners stealing second base.",
  keywords: ["baseball", "catcher", "throwing", "second base", "stealing", "pop time"],
};

export default function ThrowingSecondbasePage() {
  return (
    <>
      <h1 className="page-header">Throwing to Second Base</h1>

      <Image
        src="/images/stealing2nd.gif"
        width={200}
        height={200}
        alt="Throwing to Second Base"
        style={{ float: "right", marginLeft: "1rem", marginBottom: "1rem" }}
      />

      <p>
        <span style={{ fontSize: "1.25rem" }}>T</span>hrowing out runners at
        second base is one of the most exciting plays a catcher can make. A strong,
        accurate throw can shut down the opposing team&apos;s running game.
      </p>

      <h4>Pop Time</h4>
      <p>
        Pop time is the measurement from when the ball hits your glove to when it
        hits the infielder&apos;s glove at second base. Elite catchers have pop times
        under 1.9 seconds. Good high school catchers are around 2.0-2.1 seconds.
        Work to improve your pop time, but never sacrifice accuracy for speed.
      </p>

      <h4>The Setup</h4>
      <p>
        With a runner on first, you should be in the ready stance. Your throwing
        hand should be in a fist behind your mitt, ready for a quick exchange.
      </p>

      <h4>Receiving the Pitch</h4>
      <p>
        Catch the ball and immediately bring it to your throwing position. The
        transfer should be one fluid motion. Don&apos;t pull the ball into your body
        first—bring your hand to the ball.
      </p>

      <h4>Footwork</h4>
      <p>
        As you make the transfer, your feet should be replacing each other. Your
        right foot (for right-handers) comes forward to where your left foot was,
        and you step directly toward second base with your left foot as you throw.
      </p>

      <h4>The Throw</h4>
      <p>
        Throw over the top with a short arm action. Your target should be the
        shortstop&apos;s glove-side shoulder (or the second baseman if they&apos;re
        covering). A throw at knee height on the bag gives the infielder the best
        chance to apply the tag.
      </p>

      <h4>Common Mistakes</h4>
      <ul>
        <li>Rising up too high—stay low through the throw</li>
        <li>Taking an extra step—unnecessary movement costs time</li>
        <li>Throwing off-line—accuracy is more important than velocity</li>
        <li>Poor transfer—this is where most time is lost</li>
      </ul>

      <p>
        <strong>KEYS:</strong> Quick Exchange, Replace Feet, Stay Low, Throw
        Through the Bag
      </p>
    </>
  );
}
