import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blocking Pitches",
  description: "The catchers guide discusses the skills required to block baseballs or pitches in the dirt.",
  keywords: ["baseball", "catcher", "blocking", "wild pitch", "technique"],
};

export default function BlockingPage() {
  return (
    <>
      <h1 className="page-header">Blocking - A Fundamental Catchers Skill</h1>

      <p>
        <span style={{ fontSize: "1.25rem" }}>B</span>esides receiving and
        communication, the most important skill for a catcher to develop is the
        ability to block pitches in the dirt. Teams will take advantage of a
        catcher who is a poor blocker. Catchers who can block well keep base
        runners from advancing and instill confidence in their pitchers. A
        confident pitcher is a better pitcher.
      </p>

      <p>
        Blocking is simply defined as using whatever means available to knock down
        and control a pitch that bounces. The key term is control. I may be able
        to get in front of the ball with my body, but if that ball bounces too far
        away from me (i.e. I don&apos;t control it) a good base runner will still
        advance. The following basic technique should be used when blocking and
        controlling pitches in the dirt.
      </p>

      <h3>Technique</h3>
      <p>
        The catcher should already be in the{" "}
        <Link href="/guide/stance-ready">ready stance</Link> when attempting to
        block. Your hips and shoulders should be square to the pitcher. Recognize
        the pitch and quickly thrust your knees to the ground while remaining
        square to the pitcher. Clear your feet by moving them back and to the
        side, with your toes pointed away from your body. Your knees should almost
        land where your feet were located and be spread apart just past shoulder
        width. Do not just fall forward to your knees, as this takes too long. You
        need to get down quickly. Clear your feet and thrust your knees down.
      </p>

      <p>
        Your glove should move from your target position to directly between your
        legs with your palm up, facing the pitcher and your throwing hand
        positioned behind the glove. The web of the glove should be against the
        ground and both arms should be snug with your body. This hand and arm
        position keeps a ball from going through your five hole. Tuck both elbows
        against your body to provide a greater surface area for blocking.
      </p>

      <p>
        The upper body position is critical to controlling the deflection of the
        ball. Keeping your shoulders square to the pitcher, round your shoulders
        and bend at the waist so your upper body is leaning forward over your
        thighs. This creates a down angle that will deflect a ball down in front
        of you and at a controlled distance. Tuck your chin to your chest so you
        do not get hit in the throat.
      </p>

      <p>
        DO NOT try and scoop a pitch in the dirt with your glove. This is a bad
        habit to get into and most of the time you will fail.
      </p>

      <p>
        <em>
          <u>ADVANCED TIP:</u> For the advanced catcher, you can slightly give
          with the pitch as it hits your body. This helps your ability to control
          the ball even more.
        </em>
      </p>

      <h3>Pitches to the Side</h3>
      <p>
        For pitches that do not come directly at you, there is a slight adjustment
        that needs to be made with your positioning. Obviously, you cannot just
        drop straight down or you&apos;ll miss the ball. You need to <u>slide</u> your
        body to the location where the ball will be. There are two ways to slide
        your body into position. One way is to push off with both feet and drop
        down into position, as you are moving. The other way is to take a jab step
        with the lead foot and drop down as you move. Either way can be used.
        Experiment and find the one that is the quickest way for you to get into
        position.
      </p>

      <p>
        Another slight adjustment you need to make for a pitch to the side is a
        change in the angle of your hips and shoulders. The purpose is to help you
        control the ball and keep it directly in front of you. Remember to keep
        your shoulders square to the pitcher. The key word is pitcher. If you were
        to walk around the pitcher in a 360-degree arc, keeping your shoulders
        square to the pitcher, the angle of your shoulders changes as you move.
        This is important to know for balls that are thrown to the sides of a
        catcher.
      </p>

      <p>
        The best way to illustrate this point is to imagine throwing a ball
        against a wall. If the wall is square to you and you throw it directly at
        it, the ball will come back to you. If you throw the ball from an angle at
        the wall the ball will bounce to the side. If you throw the ball from an
        angle and the wall suddenly squares up to you, the ball will return back
        to you.
      </p>

      <p>
        From a bird&apos;s-eye view and looking directly down at the catcher—if you
        slide to your right, your right shoulder should be slightly in front of
        the left.{" "}
        <em>
          In other words you are angling your body so the ball will bounce back
          toward the pitcher.
        </em>{" "}
        The same is true if you slide in the other direction. This is a SLIGHT
        angling of the shoulders. Do not angle too much or the ball will deflect
        too far away.
      </p>

      <p>
        *On a pitch that is extremely wide, you will not have an opportunity to
        get into the proper position to block the pitch. Get to it any way you can
        and knock it down using whatever means available (i.e. glove, bare hand).
      </p>

      <h3>Breaking Balls</h3>
      <p>
        Blocking breaking balls requires you to be aware of the spin of the pitch
        and how the ball is going to react once it hits the ground. A pitcher
        throwing a curve ball or slider will cause the ball to bounce in the
        opposite direction. For example, a right-handed pitcher throws a slider.
        From the catcher&apos;s perspective, the ball in flight is moving down and to
        the right. However, if the ball hits the dirt it will bounce back to the
        left or in most cases, straighten out. You need to account for this change
        of direction. Usually, the movement in the opposite direction is minimal.
        So, do not over compensate when attempting to block these pitches. With
        enough practice and game experience, you will develop a feel for how
        certain pitches will react to hitting the ground. It also helps to know
        your pitcher and how much spin or break he generates on the ball, which
        will affect how far the ball changes direction.
      </p>

      <p>
        <em>
          <u>ADVANCED TIP:</u> A pitcher throws a curve ball or slider that
          bounces 10 feet in front of home plate. If you drop to your blocking
          position, the ball will either bounce over your head or hit your mask or
          shoulders. Stay low and read the bounce. If it bounces up shift into a
          crouched standing position, attempting to block the ball with your body.
        </em>
      </p>

      <p>
        <strong>KEYS:</strong> Knock Down, Control, Thrust Knees, Glove Position,
        Tuck Elbows, Bend Waist, Round Shoulders, Tuck Chin, Slide to Location,
        Square to Pitcher, Breaking Ball Spin
      </p>
    </>
  );
}
