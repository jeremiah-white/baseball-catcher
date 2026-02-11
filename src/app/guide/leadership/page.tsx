import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Catcher as a Field General",
  description: "The catchers guide discusses the role of the catcher as a leader on and off the field.",
  keywords: ["baseball", "catcher", "catching", "leadership skill", "confidence", "respect", "set an example"],
};

export default function LeadershipPage() {
  return (
    <>
      <h1 className="page-header">Leadership - A Catchers Most Important Skill</h1>

      <p>
        From calling pitches and defenses to working with pitchers and umpires, catchers have a wide range of responsibilities that require intelligence, tact, baseball sense, and above all, leadership. One of the most important qualities for a catcher to posses is the ability to lead. A coach needs to develop a catcher&apos;s leadership ability and a catcher needs to accept his role as a leader and work on those skills.
      </p>

      <h3>Emotional Stability</h3>
      <p>
        Focus on your defensive responsibilities. You need to have the mentality of leaving the bat on the rack when you&apos;re catching. Forget the weak ground ball to short your last at-bat it&apos;s over. Forget what Sally was telling you about Suzie during lunch. That is only a distraction and you can take care of that after the game. Your responsibility to the team is to focus on the present.
      </p>

      <h3>Confidence</h3>
      <p>
        Take charge of the situation. Be vocal. Make decisions with confidence. Confidence comes from the knowledge that the decisions you make are correct. Learn the game and the reasons you or your coaches are making certain decisions. If you are calling pitches, be confident. Everyone makes mistakes. Face up to those mistakes and learn from them.
      </p>

      <h3>Command Respect</h3>
      <p>
        Leaders command the respect of their peers. Respect is earned. As a catcher you must earn the respect of your battery mates. What do the pitchers want from you? The pitching staff has to respect your work ethic and your intelligence, your ability to call a game, and your ability to help them be a better pitcher. They have to feel you&apos;re helping them to be the very best pitcher they can be. The pitcher must feel as confident and comfortable with you as possible. Get to know the pitching staff. The only way a catcher can know the members of his pitching staff is to catch them-all of them. Be able to relate to different types of personalities.
      </p>

      <h3>Respect the Umpire</h3>
      <p>
        Another notable aspect of the catcher&apos;s leadership role is interacting with umpires. Be a diplomat and a politician. On a game-by-game basis, interact with the umpire. Develop a professional relationship. Never show up the umpire and always do your best to protect the umpire from balls in the dirt. See <Link href="/guide/rapport">umpire rapport</Link> for more info.
      </p>

      <p>
        As a catcher you are the field general. Set an example for your teammates to follow. Know your responsibilities and execute with confidence. Leadership from the catcher can be the difference between a 5-10 team and a 10-5 team.
      </p>
    </>
  );
}
