import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fielding Drills",
  description: "Fielding drills for baseball catchers including bunts, pop-ups, and plays at home.",
  keywords: ["baseball", "catcher", "fielding", "drills", "bunts", "pop-ups"],
};

export default function FieldingDrillsPage() {
  return (
    <>
      <h1 className="page-header">Fielding Drills for Catchers</h1>

      <p>
        Catchers need to be good fielders too. You&apos;ll field bunts, catch pop-ups,
        make tag plays at home, and back up bases. These drills will improve your
        fielding skills.
      </p>

      <h3>1. Bunt Fielding</h3>
      <p>
        <strong>Purpose:</strong> Field bunts cleanly and make accurate throws.
      </p>
      <p>
        Have a coach roll or bunt balls to different areas in front of home plate.
        Shed your mask, field the ball with two hands, and make a throw to first
        (or other bases). Work on your footwork to get in position for a strong
        throw.
      </p>

      <h3>2. Pop-Up Drill</h3>
      <p>
        <strong>Purpose:</strong> Track and catch foul pop-ups.
      </p>
      <p>
        Have a coach throw or hit pop-ups around home plate. Practice removing
        your mask, finding the ball, and making the catch. Remember that foul
        balls tend to spin back toward the field. Work on pop-ups behind you too.
      </p>

      <h3>3. Tag Plays</h3>
      <p>
        <strong>Purpose:</strong> Apply tags at home plate.
      </p>
      <p>
        Set up a drill with a runner coming home and a coach throwing the ball
        from different angles. Work on receiving the throw and applying a quick
        tag. Remember to give the runner a lane and only block the plate when you
        have the ball.
      </p>

      <h3>4. Force Play at Home</h3>
      <p>
        <strong>Purpose:</strong> Handle force plays with bases loaded.
      </p>
      <p>
        Practice receiving throws at home plate with a force play. Set up on the
        plate, receive the throw, and get off the base quickly to avoid a
        collision. Also practice the throw to first for the double play.
      </p>

      <h3>5. Backup Drill</h3>
      <p>
        <strong>Purpose:</strong> Hustle and positioning for backup plays.
      </p>
      <p>
        Practice running to backup first base on ground balls. Work on taking the
        proper angle and getting far enough behind the play. Also practice backing
        up throws to third base.
      </p>

      <h3>6. Passed Ball Recovery</h3>
      <p>
        <strong>Purpose:</strong> Quickly recover passed balls and wild pitches.
      </p>
      <p>
        Have someone throw balls past you to the backstop. Sprint to the ball,
        field it cleanly, and either make a throw or secure the ball. Practice
        communicating with teammates about where to throw.
      </p>

      <h3>7. Swinging Strike Three in the Dirt</h3>
      <p>
        <strong>Purpose:</strong> Field and throw on dropped third strikes.
      </p>
      <p>
        Block a ball in the dirt on strike three, locate it, and throw to first
        base. Practice this with a runner actually running to make it game-like.
        Focus on being quick but accurate.
      </p>
    </>
  );
}
