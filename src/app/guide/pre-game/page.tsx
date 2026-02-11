import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catcher Pre-Game Routine",
  description: "The catchers guide discusses the pre-game routine every catcher should preform before each game.",
  keywords: ["baseball", "catcher", "catching", "pre game routine"],
};

export default function PreGamePage() {
  return (
    <>
      <h1 className="page-header">Catchers Pre-Game Routine</h1>

      <p>
        Before every game, there is a pre-game routine catchers need to perform to learn more about the nuances of the field they are about to play on.
      </p>

      <h3>1st and 3rd Base Line</h3>
      <p>
        Before the game begins, roll balls down the first and third base lines to simulate bunts. Read how the balls roll. Do they roll toward the field of play, out of play, or straight? Is there a lip you need to be aware of that will change the direction of the ball as it&apos;s rolling? Is the grass long and slow or short and quick? Is the grass damp or wet? Is the dirt hard or soft? The answers to these questions will impact the decisions you make in the game.
      </p>

      <h3>Check the Fence</h3>
      <p>
        Check the fence and grass area around home plate. Are there holes in the fence? How close is the fence to the plate? Throw practice balls against the fence to find out if there are any unusual bounces. If the backstop is not a fence, how does the ball react off the surface? Clear the area of any debris (paper, plastic, glass, etc.)
      </p>

      <h3>Know the Out of Play Rules</h3>
      <p>
        Consult your coach or the umpire about the rules for areas that are out of play. This is important to know for pop-ups, wild throws, and wild pitches.
      </p>
    </>
  );
}
