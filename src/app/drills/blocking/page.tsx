import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blocking Drills",
  description: "Blocking drills for baseball catchers to improve their ability to stop pitches in the dirt.",
  keywords: ["baseball", "catcher", "blocking", "drills", "wild pitch"],
};

export default function BlockingDrillsPage() {
  return (
    <>
      <h1 className="page-header">Blocking Drills for Catchers</h1>

      <p>
        Blocking is essential for keeping runners from advancing on pitches in the
        dirt. These drills will help you react quickly, get in proper position,
        and keep the ball in front of you.
      </p>

      <h3>1. Dry Blocks</h3>
      <p>
        <strong>Purpose:</strong> Perfect your form without a ball.
      </p>
      <p>
        Start in your ready stance. On command, drop to your blocking position.
        Check your form: knees down, glove between legs, chin tucked, body
        rounded. Hold for 2 seconds, then return to ready stance. Repeat 20-30
        times.
      </p>

      <h3>2. Tennis Ball Blocks</h3>
      <p>
        <strong>Purpose:</strong> React to bouncing balls with less pain.
      </p>
      <p>
        Have a partner throw tennis balls in the dirt from about 30 feet. React
        and block each ball. Tennis balls don&apos;t hurt, so you can take many reps
        and learn not to be afraid of the ball. Focus on keeping the ball in front
        of you.
      </p>

      <h3>3. Three-Ball Drill</h3>
      <p>
        <strong>Purpose:</strong> React to pitches in different locations.
      </p>
      <p>
        Have a partner throw balls in the dirt to your left, right, and center in
        random order. You don&apos;t know where the ball is going until it&apos;s thrown.
        This simulates game conditions. Work on sliding to the ball and angling
        your body properly.
      </p>

      <h3>4. Rapid Fire</h3>
      <p>
        <strong>Purpose:</strong> Quick recovery between blocks.
      </p>
      <p>
        Have a partner throw balls in the dirt rapidly—one right after another
        with just enough time for you to return to your stance. This builds the
        conditioning you need for games and teaches you to recover quickly.
      </p>

      <h3>5. Live Blocking</h3>
      <p>
        <strong>Purpose:</strong> Practice with real pitches.
      </p>
      <p>
        During bullpen sessions or batting practice, have the pitcher
        intentionally throw some balls in the dirt. Nothing prepares you for game
        blocking like live pitching. Focus on reading the pitch and reacting
        appropriately.
      </p>

      <h3>6. Block and Throw</h3>
      <p>
        <strong>Purpose:</strong> Transition from blocking to throwing.
      </p>
      <p>
        Block a ball in the dirt, locate it, pop up, and make a throw to a base.
        This drill combines blocking with the awareness needed when runners are on
        base. Practice throws to all bases.
      </p>
    </>
  );
}
