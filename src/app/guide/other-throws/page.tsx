import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Throws",
  description: "Various throwing situations for catchers including pickoffs and back-picks.",
  keywords: ["baseball", "catcher", "throwing", "pickoffs", "back-picks"],
};

export default function OtherThrowsPage() {
  return (
    <>
      <h1 className="page-header">Other Throws</h1>

      <p>
        <span style={{ fontSize: "1.25rem" }}>B</span>eyond the standard throws
        to second and third, there are several other throwing situations a catcher
        needs to master.
      </p>

      <h3>Pickoff at First Base</h3>
      <p>
        The pickoff to first requires a quick step and throw. Receive the pitch,
        then step with your left foot toward first and make a quick, accurate
        throw. This throw is often used to keep runners close or to catch a runner
        leaning the wrong way.
      </p>

      <h3>Back-Pick at Third</h3>
      <p>
        This is an aggressive play to catch a runner leaning toward home. After
        receiving the pitch, quickly stand and fire to third. This works best when
        the third baseman sneaks in behind the runner. A predetermined signal
        between you and the third baseman is essential.
      </p>

      <h3>Snap Throws</h3>
      <p>
        A snap throw is a quick, dart-like throw without the normal throwing
        motion. It&apos;s used when a runner takes too big a lead and you want to catch
        them before they can react. The motion is more wrist than arm, and
        accuracy is crucial.
      </p>

      <h3>Throwing to the Pitcher Covering Home</h3>
      <p>
        On wild pitches or passed balls, you may need to flip the ball to your
        pitcher covering home plate. This should be a soft, underhand toss that&apos;s
        easy to catch and apply a tag. Practice this flip—it comes up more often
        than you might think.
      </p>

      <h3>Throwing on Bunts</h3>
      <p>
        When fielding bunts, you need to field the ball cleanly and make a strong,
        accurate throw. Know where you&apos;re throwing before you field the ball.
        Your footwork should put you in position to throw to the correct base as
        you field it.
      </p>

      <h3>Throwing After a Swinging Strike Three</h3>
      <p>
        When the ball gets away on strike three (with the batter-runner able to
        run), locate the ball quickly and make a strong throw to first. Don&apos;t rush
        so much that you bobble the ball or make a poor throw.
      </p>

      <p>
        <strong>KEYS:</strong> Know the Situation, Quick Feet, Accurate Throws,
        Practice Different Scenarios
      </p>
    </>
  );
}
