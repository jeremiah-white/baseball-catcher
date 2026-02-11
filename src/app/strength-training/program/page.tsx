import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developing a Strength Program",
  description:
    "How to develop a functional strength training program for baseball catchers based on expert principles.",
  keywords: [
    "baseball",
    "catcher",
    "strength program",
    "functional training",
    "workout design",
  ],
};

export default function StrengthProgramPage() {
  return (
    <>
      <h1 className="page-header">Developing Your Strength Program</h1>

      <p>
        Through extensive research in strength training and conditioning
        programs, Vern Gambetta has emerged as a foremost expert on functional
        strength training. Gambetta is the former Director of Conditioning for
        the Chicago White Sox and New York Mets, and has worked as a consultant
        for the Cincinnati Reds and the University of Texas Longhorns.
      </p>

      <p>
        The following tips for developing a personal strength program are based
        on functional training principles designed to improve athletic
        performance, not just gym numbers.
      </p>

      <h2>Core Principles</h2>
      <p>
        To get off on the right foot with your program, you need to understand
        and embrace certain sound principles of strength training:
      </p>

      <h3>1. Develop Sport-Specific Strength</h3>
      <p>
        This is the most important principle. The goal is not to increase your
        ability to lift heavier weights, but to develop strength that you can
        use in your sport. Everything you do in the weight room should translate
        to better performance on the field.
      </p>

      <h3>2. Strength Training is a Spectrum</h3>
      <p>
        Strength training includes body-weight exercises, core training,
        plyometric training, free-weight training, machine training, Olympic
        lifting, and power lifting. Use variety to develop complete athletic
        strength.
      </p>

      <h3>3. Train Movements, Not Muscles</h3>
      <p>
        The central nervous system calls for programmed patterns of movement
        that can be modified to react appropriately to outside forces. Think of
        movement not as an isolated event, but as a complex event involving
        multiple factors working together.
      </p>
      <p>
        Movement occurs in reaction to gravity, ground reaction forces, and
        momentum—and must be trained as such. Choosing exercises that isolate
        specific muscles does not appropriately address multi-dimensional
        strength development.
      </p>

      <h3>4. Train Core Before Extremities</h3>
      <p>
        A strong, stable core consisting of the hip, abdomen, and low back is
        the cornerstone of a good strength-training program. Without a strong,
        stable core, loading the extremities will be risky and limited. The core
        transfers force from the lower extremities to the upper extremities and
        vice versa.
      </p>

      <h3>5. Train Body Weight Before External Resistance</h3>
      <p>
        Be able to overcome gravity in traditional body-weight exercises like
        the push-up, pull-up, and body-weight squat before adding weights. This
        strengthens tendons and ligaments as well as muscles in preparation for
        external loading, and ensures good joint stability.
      </p>

      <h3>6. Train Strength Before Strength Endurance</h3>
      <p>
        Traditionally, strength-training programs have started with circuit
        training to build a foundation of strength endurance. But in order to
        build strength endurance, you first need to build strength. Only when a
        base of strength is established can you add an endurance component.
      </p>

      <h2>Program Design Guidelines</h2>

      <h3>Time of Year</h3>
      <p>
        The greatest emphasis on strength training should be during the
        off-season and pre-season. But it&apos;s important to also develop a
        manageable program that can be continued throughout the season.
      </p>

      <h3>Progression</h3>
      <p>
        Progress from body-weight exercises to external resistance exercises
        both within the workout and through the training year. Within each
        workout, perform balance/stability work and core work first. Start with
        simple, easy-to-perform exercises, then progress to complex movements.
      </p>
      <p>
        The key to progression is mastery. If you allow yourself to proceed
        before exercises have been mastered, there is a higher risk of injury.
      </p>

      <h3>Frequency</h3>
      <p>There are two approaches that work well:</p>
      <ul>
        <li>Train the entire body on alternate days, three days a week</li>
        <li>
          Use a split routine—for example, train legs and total body on Monday
          and Thursday, train upper body on Tuesday and Friday
        </li>
      </ul>

      <h3>Number of Exercises</h3>
      <p>
        Limit the number of exercises. Too many exercises dilute the training
        effect. Find a few essential &quot;need to do&quot; exercises so you can
        focus on the workout and not on learning new exercises.
      </p>

      <h3>Duration</h3>
      <p>
        Keep the entire strength-training session in the range of 60 to 90
        minutes. The closer to one hour, the better the results.
      </p>

      <h2>Selecting Exercises</h2>

      <h3>Make Them Multi-Joint</h3>
      <p>
        Use as many joints as possible to produce—and reduce—force. This mirrors
        how your body works in athletic movements.
      </p>

      <h3>Avoid Isolation Exercises</h3>
      <p>
        Skip exercises that put unusual stress on one joint. They cause
        confusion because the muscle is asked to do something different in
        strength training than it must do in movement. Exercises like leg
        extensions, leg curls, concentration curls, and pec deck flys have no
        place in a functional strength-training program.
      </p>

      <h3>Control Speed</h3>
      <p>
        Incorporate speed of movement that is safe and that you can control.
        Don&apos;t sacrifice form for speed.
      </p>

      <h3>Minimize Machines</h3>
      <p>
        Machine training should play a minor role in strength-training programs.
        There is a mistaken notion that it&apos;s best to begin by using
        machines. Because machines provide so much stabilization, they give a
        false sense of security that does not transfer to a free,
        gravitationally enriched environment.
      </p>

      <h2>Evaluating Results</h2>
      <p>
        The traditional evaluation of a strength-training program has been the
        ability to lift more weight or perform more repetitions. In an absolute
        sense, that is still valid, but you need to go further and carefully
        observe the carryover to actual sport movement.
      </p>
      <p>
        Ask yourself: Has your ability to start and stop improved? Are you
        throwing with more velocity? Are you blocking balls more effectively?
        Has there been a reduction in injuries? These are the ultimate measures
        of success.
      </p>

      <p>
        <Link href="/strength-training/sample-program">
          View a Sample Workout Program →
        </Link>
      </p>
    </>
  );
}
