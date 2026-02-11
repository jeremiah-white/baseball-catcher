import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Throwing to Third Base",
  description: "Techniques for throwing out runners stealing third base.",
  keywords: ["baseball", "catcher", "throwing", "third base", "stealing"],
};

export default function ThrowingThirdbasePage() {
  return (
    <>
      <h1 className="page-header">Throwing to Third Base</h1>

      <p>
        <span style={{ fontSize: "1.25rem" }}>T</span>hrowing to third base
        presents unique challenges compared to throwing to second. The throw is
        shorter but often more difficult due to the angle and the presence of a
        right-handed batter.
      </p>

      <h4>The Challenge</h4>
      <p>
        With a right-handed batter at the plate, your throwing lane to third base
        is partially blocked. You need to throw around or over the batter while
        maintaining accuracy and velocity.
      </p>

      <h4>Footwork Options</h4>
      <p>
        There are several footwork patterns for throwing to third:
      </p>
      <ul>
        <li>
          <strong>Jab step:</strong> Step with your right foot behind your left
          and clear the batter before throwing
        </li>
        <li>
          <strong>Jump turn:</strong> Pivot your body to face third and throw
        </li>
        <li>
          <strong>Step through:</strong> Step toward third with your left foot
          and throw over the batter
        </li>
      </ul>

      <h4>With a Left-Handed Batter</h4>
      <p>
        The throw to third is easier with a left-handed batter because your
        throwing lane is clear. Use the same fundamentals as a throw to second—
        quick transfer, replace feet, and throw accurately.
      </p>

      <h4>Reading the Situation</h4>
      <p>
        Runners don&apos;t attempt to steal third as often as second, and when they
        do, they usually get a big jump. If the runner has a great jump, sometimes
        the smart play is to hold the ball rather than make a poor throw that
        could lead to a run scoring.
      </p>

      <h4>Target</h4>
      <p>
        Aim for the infield side of the bag, chest high to the third baseman. This
        allows them to catch and sweep down for the tag in one motion.
      </p>

      <p>
        <strong>KEYS:</strong> Clear the Batter, Quick Release, Accurate Throw,
        Know When to Hold
      </p>
    </>
  );
}
