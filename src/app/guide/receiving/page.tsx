import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Receiving Techniques",
  description: "The catchers guide discusses the proper receiving techniques for a catcher.",
  keywords: ["baseball", "catcher", "receiving", "catching techniques"],
};

export default function ReceivingPage() {
  return (
    <>
      <h1 className="page-header">Proper Receiving Techniques for a Catcher</h1>

      <Image
        src="/images/receivingUecker.gif"
        width={150}
        height={150}
        alt="Catcher Receiving"
        style={{ float: "right", marginLeft: "1rem" }}
      />

      <p>
        <span style={{ fontSize: "1.25rem" }}>R</span>eceiving is simply catching
        the ball. A good catcher will make receiving look effortless. You need to
        have soft hands, but at the same time be firm with your wrist and arm as
        you catch the ball. Look the pitch all the way into your mitt. Your glove
        should not move unless you want to move it.
      </p>

      <h4>Stick the Strike</h4>
      <p>
        If a pitcher throws a pitch that you KNOW is going to be a strike, stick
        the pitch. A phrase I was taught and use repeatedly with my catchers is,
        &quot;stick the strike.&quot; This means that your glove should not move in any
        direction (except a little back) after you catch the pitch. Hold the pitch
        where you caught it, BRIEFLY, then throw it back to the pitcher.{" "}
        <u>
          For pitches low in the zone or breaking balls, sticking the strike is
          especially important.
        </u>{" "}
        Catchers have a tendency to drop their glove in a downward movement after
        having caught a low or downward moving pitch. This is a bad habit and
        could cost your pitcher a called strike. Keep the ball in the strike zone.
        Stick It!
      </p>

      <h4>Beat the Pitch to the Spot</h4>
      <p>
        Another phrase I use with my catchers that helps them with their receiving
        is &quot;beat the pitch.&quot; As you are tracking the pitch with your eyes, you
        should have a good idea where the pitch will cross the plate and where you
        will catch it. With your mitt,{" "}
        <u>beat the pitch to that spot.</u> This will allow you to &quot;stick&quot; that
        pitch and the momentum of your glove is stopped. Stopping your downward
        glove momentum aids your ability to stick the low strike. DO NOT track the
        pitch with your mitt.
      </p>

      <h4>High and Low Pitches</h4>
      <p>
        A general rule for catching pitches that are high in the zone and
        borderline strikes/balls is to catch them as far back into your body as
        possible. Every pitch has downward movement, even fastballs. By catching a
        high pitch further back into your body you allow the pitch to drop. This
        provides the illusion of a strike that the umpire may call in your favor.
        This trick is especially useful with breaking balls.
      </p>

      <p>
        For pitches low in the zone, which are borderline strikes/balls, you want
        to almost attack them. Extend your arm to catch them while they are still
        in the strike zone. You need to be careful so your mitt does not interfere
        with the batter&apos;s swing. Also, you do not want to fall forward off your
        base.
      </p>

      <p>
        Remember for these low pitches: beat the pitch to the spot and then stick
        it. By applying these simple tricks for high and low pitches, you will get
        more strike calls for your pitcher.
      </p>

      <p>
        <strong>KEYS:</strong> Soft Hands, Firm Arm and Wrist, Stick Strikes, Beat
        the Pitch
      </p>
    </>
  );
}
