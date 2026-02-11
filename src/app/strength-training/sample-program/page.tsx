import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Weight Training Program",
  description:
    "Sample high-repetition, low-weight workout program for baseball catchers from a top Division 1 program.",
  keywords: [
    "baseball",
    "catcher",
    "weight training",
    "workout",
    "sample program",
    "off-season",
  ],
};

export default function SampleProgramPage() {
  return (
    <>
      <h1 className="page-header">Sample Weight Training Program</h1>

      <p>
        <strong>High Repetition / Low Weight Workout</strong> — This program is
        used in the fall (off-season) at a top Division 1 baseball program. The
        program cycle is 3 weeks and then starts over until the in-season
        workouts begin.
      </p>

      <p>
        <em>
          Make sure to consult a certified trainer before attempting any
          workouts.
        </em>
      </p>

      <h2>Program Overview</h2>
      <p>
        This program emphasizes high repetitions with lower weights to build
        muscular endurance, joint stability, and a foundation for more intense
        training later. The focus is on functional movements that translate to
        on-field performance.
      </p>

      <h2>Week 1-2: Foundation Phase</h2>

      <h3>Day 1: Lower Body & Core</h3>
      <ul>
        <li>Warm-up: 10 minutes light cardio + dynamic stretching</li>
        <li>Bodyweight squats: 3 sets of 15</li>
        <li>Lunges (walking): 3 sets of 12 each leg</li>
        <li>Romanian deadlifts (light weight): 3 sets of 12</li>
        <li>Leg press: 3 sets of 15</li>
        <li>Calf raises: 3 sets of 20</li>
        <li>Planks: 3 sets of 45 seconds</li>
        <li>Russian twists: 3 sets of 20</li>
        <li>Cool-down: Static stretching</li>
      </ul>

      <h3>Day 2: Upper Body Push</h3>
      <ul>
        <li>Warm-up: 10 minutes light cardio + arm circles + band work</li>
        <li>Push-ups: 3 sets of 15-20</li>
        <li>Dumbbell bench press: 3 sets of 12</li>
        <li>Incline dumbbell press: 3 sets of 12</li>
        <li>Shoulder press (seated): 3 sets of 12</li>
        <li>Lateral raises: 3 sets of 15</li>
        <li>Tricep pushdowns: 3 sets of 15</li>
        <li>Core work: Bicycle crunches 3 sets of 20</li>
        <li>Cool-down: Static stretching</li>
      </ul>

      <h3>Day 3: Upper Body Pull</h3>
      <ul>
        <li>Warm-up: 10 minutes light cardio + arm circles + band work</li>
        <li>Pull-ups or lat pulldowns: 3 sets of 10-12</li>
        <li>Seated cable rows: 3 sets of 12</li>
        <li>Dumbbell rows: 3 sets of 12 each arm</li>
        <li>Face pulls: 3 sets of 15</li>
        <li>Bicep curls: 3 sets of 15</li>
        <li>Rotator cuff exercises with bands: 3 sets of 15 each</li>
        <li>Cool-down: Static stretching</li>
      </ul>

      <h3>Day 4: Total Body / Explosiveness</h3>
      <ul>
        <li>Warm-up: Dynamic movements + mobility work</li>
        <li>Box jumps: 3 sets of 8</li>
        <li>Medicine ball throws: 3 sets of 10</li>
        <li>Goblet squats: 3 sets of 12</li>
        <li>Push-up to row: 3 sets of 10</li>
        <li>Step-ups with weight: 3 sets of 10 each leg</li>
        <li>Core circuit: Mountain climbers, dead bugs, bird dogs</li>
        <li>Cool-down: Static stretching + foam rolling</li>
      </ul>

      <h2>Week 3: Increased Intensity</h2>
      <p>
        During week 3, increase the weight slightly while maintaining the same
        rep ranges. Focus on controlled movements and proper form.
      </p>

      <h3>Day 1: Lower Body & Core</h3>
      <ul>
        <li>Front squats: 3 sets of 12</li>
        <li>Bulgarian split squats: 3 sets of 10 each leg</li>
        <li>Deadlifts (moderate weight): 3 sets of 10</li>
        <li>Leg curls: 3 sets of 12</li>
        <li>Single-leg calf raises: 3 sets of 15</li>
        <li>Hanging leg raises: 3 sets of 12</li>
        <li>Side planks: 3 sets of 30 seconds each side</li>
      </ul>

      <h3>Day 2: Upper Body Push</h3>
      <ul>
        <li>Bench press (barbell): 3 sets of 10</li>
        <li>Dumbbell shoulder press: 3 sets of 10</li>
        <li>Incline dumbbell flys: 3 sets of 12</li>
        <li>Arnold press: 3 sets of 10</li>
        <li>Dips (assisted if needed): 3 sets of 10</li>
        <li>Cable crossovers: 3 sets of 12</li>
      </ul>

      <h3>Day 3: Upper Body Pull</h3>
      <ul>
        <li>Weighted pull-ups or lat pulldowns: 3 sets of 8-10</li>
        <li>T-bar rows: 3 sets of 10</li>
        <li>Single-arm dumbbell rows: 3 sets of 10</li>
        <li>Reverse flys: 3 sets of 12</li>
        <li>Hammer curls: 3 sets of 12</li>
        <li>Band pull-aparts: 3 sets of 20</li>
      </ul>

      <h3>Day 4: Total Body Power</h3>
      <ul>
        <li>Power cleans (if experienced) or kettlebell swings: 3 sets of 8</li>
        <li>Depth jumps: 3 sets of 6</li>
        <li>Medicine ball slams: 3 sets of 10</li>
        <li>Overhead medicine ball throws: 3 sets of 10</li>
        <li>Lateral bounds: 3 sets of 8 each direction</li>
        <li>Core finisher: Planks with shoulder taps</li>
      </ul>

      <h2>Important Notes</h2>
      <ul>
        <li>
          <strong>Rest:</strong> Take 60-90 seconds between sets during weeks
          1-2, and 90-120 seconds during week 3
        </li>
        <li>
          <strong>Recovery:</strong> Take at least one full rest day between
          training days
        </li>
        <li>
          <strong>Form first:</strong> Never sacrifice form for heavier weight
        </li>
        <li>
          <strong>Listen to your body:</strong> If something doesn&apos;t feel
          right, stop and reassess
        </li>
        <li>
          <strong>Hydration:</strong> Drink water throughout your workout
        </li>
        <li>
          <strong>Nutrition:</strong> Eat a balanced meal 2-3 hours before
          training and refuel within 30 minutes after
        </li>
      </ul>

      <h2>Arm Care (Every Training Day)</h2>
      <p>
        Before every workout, complete a proper arm care routine:
      </p>
      <ul>
        <li>Arm circles: 2 sets of 20 in each direction</li>
        <li>Band pull-aparts: 2 sets of 15</li>
        <li>External rotation with band: 2 sets of 15</li>
        <li>Internal rotation with band: 2 sets of 15</li>
        <li>Shoulder stretches: 30 seconds each</li>
      </ul>

      <p>
        <Link href="/strength-training/nutrition">
          Learn about proper nutrition →
        </Link>
      </p>
      <p>
        <Link href="/strength-training/program">
          ← Back to Program Design
        </Link>
      </p>
    </>
  );
}
