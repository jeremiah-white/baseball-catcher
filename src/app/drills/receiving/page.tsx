import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Receiving Drills",
  description: "Receiving drills for baseball catchers to improve pitch catching.",
  keywords: ["baseball", "catcher", "receiving", "drills", "catching"],
};

export default function ReceivingDrillsPage() {
  return (
    <>
      <h1 className="page-header">Receiving Drills for Catchers</h1>

      <p>
        Receiving is the foundation of catching. These drills will help you
        develop soft hands, improve your pitch presentation, and become more
        comfortable receiving pitches in all locations.
      </p>

      <h3>1. Bare Hand Drill</h3>
      <p>
        <strong>Purpose:</strong> Develop soft hands.
      </p>
      <p>
        Have a partner throw tennis balls to you from about 15 feet away. Catch
        them with your bare hand. This forces you to receive the ball softly—you
        can&apos;t catch a tennis ball with stiff hands. Catch 25-50 balls.
      </p>

      <h3>2. One-Knee Receiving</h3>
      <p>
        <strong>Purpose:</strong> Focus on glove work without worrying about stance.
      </p>
      <p>
        Kneel on your right knee with your left leg up. Receive pitches from a
        partner or machine. This isolates your upper body receiving mechanics.
        Focus on being quiet with your glove and sticking strikes.
      </p>

      <h3>3. Thumb-to-Pinky Drill</h3>
      <p>
        <strong>Purpose:</strong> Proper glove position for high and low pitches.
      </p>
      <p>
        Practice receiving pitches above and below the belt. For pitches below the
        belt, your thumb should point down (pinky up). For pitches above the belt,
        your thumb should point up (pinky down). Work on the transition point
        where you switch.
      </p>

      <h3>4. Shadow Receiving</h3>
      <p>
        <strong>Purpose:</strong> Reinforce proper mechanics without a ball.
      </p>
      <p>
        Get in your stance and visualize receiving pitches. Move your glove to
        different locations as if catching pitches. Focus on being quiet and
        sticking each imaginary pitch. This is great for warm-ups or when you
        don&apos;t have a partner.
      </p>

      <h3>5. Multi-Location Receiving</h3>
      <p>
        <strong>Purpose:</strong> Adjust to pitches all around the zone.
      </p>
      <p>
        Have a pitcher or coach throw to different locations randomly—inside,
        outside, high, low. Don&apos;t know where the pitch is coming. React to each
        pitch and receive it cleanly. This simulates game situations.
      </p>

      <h3>6. Machine Receiving</h3>
      <p>
        <strong>Purpose:</strong> High-volume repetitions.
      </p>
      <p>
        Use a pitching machine to get a high number of quality repetitions. Set
        the machine to different locations and work on receiving each pitch
        properly. This is especially useful when you don&apos;t have a live arm
        available.
      </p>
    </>
  );
}
