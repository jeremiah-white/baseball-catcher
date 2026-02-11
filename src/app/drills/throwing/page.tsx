import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Throwing Drills",
  description: "Throwing drills for baseball catchers to improve arm strength and accuracy.",
  keywords: ["baseball", "catcher", "throwing", "drills", "arm strength"],
};

export default function ThrowingDrillsPage() {
  return (
    <>
      <h1 className="page-header">Throwing Drills for Catchers</h1>

      <p>
        A strong, accurate throwing arm is one of a catcher&apos;s most valuable
        assets. These drills will help you improve your transfer, footwork, arm
        strength, and accuracy.
      </p>

      <h3>1. Transfer Drill</h3>
      <p>
        <strong>Purpose:</strong> Quick glove-to-hand transfer.
      </p>
      <p>
        Have a partner flip balls into your glove from close range. Practice the
        transfer—catching and getting the ball into throwing position as quickly
        as possible. Don&apos;t throw; just work on the catch-and-grip motion. Aim for
        100+ reps.
      </p>

      <h3>2. Footwork Only</h3>
      <p>
        <strong>Purpose:</strong> Perfect your foot replacement.
      </p>
      <p>
        Without a ball, practice your footwork for throws to second and third.
        Start in your stance, receive an imaginary pitch, and work through your
        footwork. Focus on replacing your feet efficiently and getting squared to
        your target.
      </p>

      <h3>3. Knee Throws</h3>
      <p>
        <strong>Purpose:</strong> Develop arm action without legs.
      </p>
      <p>
        Kneel on both knees and throw to a target. This isolates your arm action
        and forces you to use proper mechanics. Focus on throwing over the top
        with good rotation on the ball.
      </p>

      <h3>4. Quick Release</h3>
      <p>
        <strong>Purpose:</strong> Minimize time from catch to release.
      </p>
      <p>
        Have a coach time your throws from catch to release (or when the ball hits
        the target). Work on shaving time off your throws while maintaining
        accuracy. Record your times and try to improve.
      </p>

      <h3>5. Target Throwing</h3>
      <p>
        <strong>Purpose:</strong> Improve accuracy.
      </p>
      <p>
        Set up targets at different heights and locations at second and third
        base. Try to hit the targets consistently. Work on throwing to both the
        glove side and arm side of the bag.
      </p>

      <h3>6. Long Toss</h3>
      <p>
        <strong>Purpose:</strong> Build arm strength.
      </p>
      <p>
        Play catch at increasing distances, eventually throwing as far as you can
        while still being accurate. Don&apos;t overthrow—focus on proper mechanics.
        Gradually work back to normal throwing distance. This builds arm strength
        over time.
      </p>

      <h3>7. Pop-Up Throw</h3>
      <p>
        <strong>Purpose:</strong> Full throwing motion from catching position.
      </p>
      <p>
        Receive a pitch, go through your full throwing motion, and throw to
        second base. Have someone time you from when the ball hits your glove to
        when it reaches the base. Work on improving your &quot;pop time.&quot;
      </p>
    </>
  );
}
