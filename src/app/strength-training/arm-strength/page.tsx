import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arm Strength and Conditioning",
  description:
    "Complete arm strength and conditioning program for baseball catchers by Alan Jaeger.",
  keywords: [
    "baseball",
    "catcher",
    "arm strength",
    "conditioning",
    "throwing program",
    "rotator cuff",
  ],
};

export default function ArmStrengthPage() {
  return (
    <>
      <h1 className="page-header">Arm Strength and Conditioning Program</h1>

      <p>
        <em>Based on the teachings of Alan Jaeger</em>
      </p>

      <p>
        Throwing is a lost art. Throwing isn&apos;t something that we should do
        &quot;just&quot; to get our arms loose. Throwing should be done to
        maximize that skill—to develop it like any other skill to be a strength
        rather than a potential career-threatening weakness.
      </p>

      <p>
        There isn&apos;t any reason why a player should have a chronically sore,
        weak, or injury-prone arm. If the arm would get the same kind of
        attention that hitting, defense, or pitching gets, then it too would
        have a chance to thrive on a daily basis. Unfortunately, most baseball
        players neglect their arms or take them for granted.
      </p>

      <h2>Your Arm is Your Lifeline</h2>
      <p>
        A baseball player needs to have a strong, well-conditioned, and healthy
        arm to play baseball. Period. Baseball players simply cannot afford to
        allow their arm to be a liability—it must be an asset. You can&apos;t
        play baseball if you can&apos;t throw a baseball.
      </p>

      <p>
        Scouts have an entire section on their player information cards devoted
        to arm strength, accuracy, and mechanics because it&apos;s an integral
        part of your package as a player. Your arm can either complete you as a
        player or be something that limits your career.
      </p>

      <h2>Getting Started: Arm Preparation</h2>
      <p>
        There are two exercises that must always precede picking up a baseball:
      </p>

      <h3>1. Arm Circles</h3>
      <p>
        A set of arm circles is the first exercise done to warm up the smaller
        muscles in the shoulder so that subsequent surgical tubing exercises can
        be maximized.
      </p>
      <p>Benefits:</p>
      <ul>
        <li>Warms and oxygenates the shoulder</li>
        <li>
          Provides flexibility and range of motion, strengthens the rotator cuff
          muscles by isolating them
        </li>
        <li>Provides muscle balance</li>
        <li>Creates endurance</li>
        <li>Promotes better recovery</li>
        <li>Prepares arm for surgical tubing exercises</li>
      </ul>

      <h3>2. Surgical Tubing (Jobe Exercises)</h3>
      <p>
        Surgical tubing exercises are designed to isolate specific muscles in
        the rotator cuff so they can be stretched and strengthened. Because
        certain muscles in the back of your shoulder (decelerators) are more
        vulnerable to breaking down, these exercises are designed to balance the
        rotator cuff muscle group.
      </p>
      <p>Benefits:</p>
      <ul>
        <li>
          Provides a deeper, more isolated workout for the rotator cuff muscles
        </li>
        <li>Strengthens the shoulder from &quot;inside out&quot;</li>
        <li>Maximizes elasticity, flexibility, and range of motion</li>
        <li>
          Provides rotator cuff muscle balance, strength, and endurance
        </li>
        <li>Promotes recovery in both short-term and long-term</li>
      </ul>

      <h2>Mechanics: The Hip Drill</h2>
      <p>
        Now that you&apos;ve put the arm in an ideal space to throw, you need to
        make sure that your mechanics are going to support, rather than inhibit,
        the arm for your throwing program.
      </p>
      <p>
        Some mechanical adjustments may be essential to avoiding injuries and
        providing long-term health. Without sound and consistent throwing
        mechanics, a player can significantly limit the amount of strength,
        endurance, and accuracy that can otherwise be greatly improved.
      </p>
      <p>Key points:</p>
      <ul>
        <li>Maximizes arm health and efficiency (injury prevention)</li>
        <li>Provides support for the shoulder and elbow</li>
        <li>Creates consistency and accuracy</li>
        <li>Arm should be loose and relaxed</li>
      </ul>

      <h2>The Stretching Phase</h2>
      <p>
        The first key to conditioning your arm is learning how to build your
        base at the right pace. Because it will take four to six weeks to
        establish a solid base, you must learn how to &quot;listen&quot; to your
        arm.
      </p>
      <p>For someone new to long toss, it might take a couple of weeks at a
        relatively short distance (100-150 feet) to stretch and lengthen the arm
        before moving to the extension phase.
      </p>
      <p>
        As you learn to throw through a stretch without extra effort, you will
        notice that the arm has a chance to &quot;open up&quot; without
        unnecessary strain. The arm will thrive on throwing often at this pace.
        Because the arm is just stretching out, there is little or no swelling
        from day to day.
      </p>

      <h2>The Pull-Down Phase</h2>
      <p>
        Where stretching creates warmth, length, and extension, the pull-down
        phase generates arm speed, arm strength, lower release point, and
        acceleration through the release point.
      </p>
      <p>
        Because the muscles have been lengthened and the arm loosened, there is
        more space and freedom for the arm to generate a quicker response. Arm
        strength becomes a by-product of pulling down because the additional
        distance provides the arm with an opportunity to generate more arm speed
        on longer, looser, and well-conditioned muscles.
      </p>

      <h3>Key Points for Pull-Down</h3>
      <ul>
        <li>Your body language should be loose and relaxed</li>
        <li>Be aware of your direction and your mechanics</li>
        <li>
          Keep your back hip over your back heel (balance) as long as possible
        </li>
        <li>After your last peak throw, come in approximately 10-15 feet per throw</li>
        <li>
          Each pull-down should have the same &quot;distance&quot; as your peak
          throw
        </li>
        <li>
          Always finish through your release point and miss &quot;lower&quot;
          rather than &quot;higher&quot;
        </li>
        <li>
          At 60-80 feet, take as many throws as you need to complete your
          workout
        </li>
        <li>Warm down at your own pace</li>
      </ul>

      <h2>Post-Throwing Conditioning</h2>
      <p>
        If your throwing program completes your throwing for the day, plan on
        running immediately after your last throw. A light set of post-throwing
        arm circles and surgical tubing exercises (especially external rotation)
        may also be done.
      </p>
      <p>
        Running, arm circles, and tubing exercises minimize swelling, promote
        better circulation, and significantly improve recovery time.
      </p>

      <p>
        <Link href="/strength-training/long-toss">
          Learn more about long toss programs →
        </Link>
      </p>
    </>
  );
}
