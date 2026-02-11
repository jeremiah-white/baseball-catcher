import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agility Drills",
  description: "Agility drills for baseball catchers to improve quickness and mobility.",
  keywords: ["baseball", "catcher", "agility", "drills", "quickness"],
};

export default function AgilityDrillsPage() {
  return (
    <>
      <h1 className="page-header">Agility Drills for Catchers</h1>

      <p>
        Agility is essential for catchers. You need to move quickly in any
        direction—to block pitches, field bunts, catch pop-ups, and make throws.
        These drills will improve your quickness and mobility.
      </p>

      <h3>1. Lateral Shuffles</h3>
      <p>
        <strong>Purpose:</strong> Improve side-to-side movement for blocking.
      </p>
      <p>
        Start in your ready stance. Shuffle laterally 10-15 feet to your right,
        then shuffle back to your left. Keep your hips low and your feet quick.
        Don&apos;t cross your feet. Repeat 10 times in each direction.
      </p>

      <h3>2. Jump Rope</h3>
      <p>
        <strong>Purpose:</strong> Build foot speed and endurance.
      </p>
      <p>
        Jump rope for 2-3 minutes at a time. Vary your jumping—two feet, one foot,
        alternating feet, high knees. This builds the foot quickness you need for
        blocking and throwing.
      </p>

      <h3>3. Cone Drills</h3>
      <p>
        <strong>Purpose:</strong> Quick direction changes.
      </p>
      <p>
        Set up 4-5 cones in a line, 5 feet apart. Sprint to the first cone, touch
        the ground, and sprint back to start. Then sprint to the second cone and
        back. Continue through all cones. Focus on explosive starts and stops.
      </p>

      <h3>4. Drop and Pop</h3>
      <p>
        <strong>Purpose:</strong> Quick transitions from blocking to throwing.
      </p>
      <p>
        Start in your ready stance. On command, drop to your blocking position.
        Immediately pop back up to your throwing position. Repeat 10-15 times.
        Focus on speed and proper technique in both positions.
      </p>

      <h3>5. Four Corners</h3>
      <p>
        <strong>Purpose:</strong> Multi-directional movement.
      </p>
      <p>
        Set up four cones in a square, about 10 feet apart. Start at one corner.
        Sprint forward to the next cone, shuffle right to the next, backpedal to
        the next, and shuffle left back to start. Go both clockwise and
        counter-clockwise.
      </p>

      <h3>6. Quick Feet Ladder</h3>
      <p>
        <strong>Purpose:</strong> Foot speed and coordination.
      </p>
      <p>
        Use an agility ladder. Perform various footwork patterns through the
        ladder—one foot in each box, two feet in each box, lateral movements,
        etc. Stay light on your feet and move as quickly as possible while
        maintaining control.
      </p>
    </>
  );
}
