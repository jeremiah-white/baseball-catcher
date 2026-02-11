import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catcher Glossary",
  description: "Glossary of catching terms and phrases.",
  keywords: ["baseball", "catcher", "glossary", "terms", "definitions"],
};

export default function GlossaryPage() {
  return (
    <>
      <h1 className="page-header">Catcher Glossary</h1>

      <p>
        Here are common terms and phrases used in catching:
      </p>

      <dl className="glossary">
        <dt>Back-pick</dt>
        <dd>A throw to a base to catch a runner who has strayed too far off the bag.</dd>

        <dt>Battery</dt>
        <dd>The pitcher and catcher combination.</dd>

        <dt>Beat the pitch</dt>
        <dd>Getting your glove to the location where you&apos;ll catch the pitch before the ball arrives.</dd>

        <dt>Block</dt>
        <dd>Using your body to stop a pitch in the dirt and keep it in front of you.</dd>

        <dt>Bullpen</dt>
        <dd>The area where pitchers warm up; also the pitching staff that isn&apos;t starting.</dd>

        <dt>Cross-up</dt>
        <dd>When the pitcher throws a different pitch than what the catcher called.</dd>

        <dt>Cutoff</dt>
        <dd>An infielder positioned to intercept an outfield throw and redirect it.</dd>

        <dt>Five hole</dt>
        <dd>The area between a catcher&apos;s legs.</dd>

        <dt>Frame</dt>
        <dd>Subtly moving your glove to make a borderline pitch appear to be a strike.</dd>

        <dt>Gear</dt>
        <dd>The protective equipment worn by a catcher: mask, chest protector, shin guards.</dd>

        <dt>Indicator</dt>
        <dd>A signal that tells the pitcher which subsequent signal is the actual pitch.</dd>

        <dt>Passed ball</dt>
        <dd>A pitch that gets by the catcher that should have been caught, allowing runners to advance.</dd>

        <dt>Pitchout</dt>
        <dd>A pitch intentionally thrown high and outside to allow the catcher to throw out a runner.</dd>

        <dt>Pop time</dt>
        <dd>The time from when a pitch hits the catcher&apos;s glove to when it hits the infielder&apos;s glove on a stolen base attempt.</dd>

        <dt>Ready stance</dt>
        <dd>An athletic position used with runners on base, allowing quick movement in any direction.</dd>

        <dt>Receive</dt>
        <dd>The act of catching the pitch cleanly and presenting it to the umpire.</dd>

        <dt>Relaxed stance</dt>
        <dd>A comfortable position used with no runners on base and less than two strikes.</dd>

        <dt>Relay</dt>
        <dd>A throw from one fielder to another to get the ball to a base quicker.</dd>

        <dt>Set up</dt>
        <dd>The catcher&apos;s position behind the plate before a pitch.</dd>

        <dt>Snap throw</dt>
        <dd>A quick throw using mostly wrist action to catch a runner off guard.</dd>

        <dt>Stick the strike</dt>
        <dd>Holding your glove still after catching a strike to help the umpire see it clearly.</dd>

        <dt>Target</dt>
        <dd>The location where the catcher sets up his mitt for the pitcher to aim.</dd>

        <dt>Tools of ignorance</dt>
        <dd>A humorous nickname for catcher&apos;s equipment.</dd>

        <dt>Transfer</dt>
        <dd>Moving the ball from glove to throwing hand to make a throw.</dd>

        <dt>Wild pitch</dt>
        <dd>A pitch so errant that the catcher cannot reasonably be expected to catch it.</dd>
      </dl>
    </>
  );
}
