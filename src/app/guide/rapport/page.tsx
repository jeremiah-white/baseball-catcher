import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Umpire Rapport - Catcher Umpire Interaction",
  description: "The catchers guide discusses the interaction between homeplate umpires and catchers throughout the course of a game.",
  keywords: ["baseball", "catcher", "catching", "umpire", "umpire catcher interaction", "rapport"],
};

export default function RapportPage() {
  return (
    <>
      <h1 className="page-header">Catcher Umpire Interaction</h1>

      <p>
        Umpire - catcher interaction can best be described as a political dance. The object is to get the most from the umpire through the exchange of information in a manner that does not offend the ump. This interaction will help the catcher and pitcher determine the called strike zone. Your purpose is to get as many called strikes for your pitcher as possible.This area of catching knowledge and the techniques for talking to umpires develop over time.
      </p>

      <Image
        src="/images/umpireQuote.gif"
        width={200}
        height={200}
        alt="Umpire Quote"
        style={{ float: "right", marginLeft: "1rem", marginBottom: "1rem" }}
      />

      <p>
        <i>The following information is an excerpt from <a href="http://momentummedia.com/articles/cm/cm0801/catcher.htm">&quot;Catcher in the Raw&quot;</a> by Dennis Read. The article appears in the February 2000 issue of <u>Coaching Management</u>. Coaches interviewed for this article include: Mike Lane, Head Coach at the University of North Alabama, Ed Cheff, Head Coach at Lewis-Clark State College, and Mickey McMurtry, Head Coach at Lassiter High School in Marietta, Ga.</i>
      </p>

      <p>
        Another notable aspect of the catcher&apos;s leadership role is interacting with umpires. &quot;That&apos;s something you have to nurture and develop,&quot; [Mike] Lane says. &quot;We tell our guys, &apos;You have to be a diplomat back there, you have to be a politician.&apos; If an umpire misses a curve that was right there, and the catcher knows it&apos;s a strike and says, &apos;Blue, that was there, wasn&apos;t it?,&apos; he&apos;s telling the umpire he thinks he missed the call. A lot of umpires don&apos;t take well to that. But if the catcher says to the umpire, &apos;Blue, was that a little low?,&apos; then he&apos;s giving him an opportunity to say &apos;Yes,&apos; or &apos;You know, I might have missed that one.&apos; Then the catcher can say, &apos;That&apos;s OK, we&apos;ll get the next one.&apos;&quot;
      </p>

      <Image
        src="/images/umpire.jpg"
        width={150}
        height={224}
        alt="Umpire"
        style={{ float: "left", marginRight: "0.5rem", marginBottom: "1rem" }}
      />

      <p>
        Your catchers should also find out if they&apos;re doing anything to block the umpire&apos;s view, preferably early in the game before he has to call any close pitches. &quot;We teach our catchers to always start out asking the umpire, &apos;Blue, am I giving you enough room to see the ball?&apos;&quot; Lane says. &quot;Don&apos;t ask him after he&apos;s missed a pitch, but start out the game like that. &apos;Blue, let me know if I&apos;m getting in your way or moving too quickly, because I want to help you out.&apos;&quot; It&apos;s important for catchers to feel as if every pitch is on display, even in the bullpen or during practice. &quot;They should get the feeling all the time that they&apos;re trying to sell that pitch,&quot; [Ed] Cheff says. &quot;I want my catchers to have the mentality that, &apos;There&apos;s always an umpire behind me and this guy is going to make a call on this pitch and I&apos;m trying to make it easy for him.&apos; A lot of catchers are sloppy with this in drills and in the bullpen. Then they try to clean it up when they get in the game, and they can&apos;t.&quot;
      </p>

      <p>
        It also helps to remind your catcher that it&apos;s a good idea to block every ball for the umpire. A ball doesn&apos;t hurt any less just because no one is on base. &quot;You might be calling him Joe and thinking he&apos;s your best friend,&quot; Cheff says, &quot;but the first time you won&apos;t block a ball for him, he&apos;s going to start to tighten down and I guarantee you his strike zone will change.&quot;
      </p>

      <p>
        At least one coach has found that simply removing himself from the catcher-umpire equation works best. &quot;I used to put my catchers in an adversarial role because I&apos;d ask &apos;Was that pitch in there? Was that a strike?&apos;&quot; [Mickey] McMurtry says. &quot;I was constantly putting the kid in between me and the umpire. And I think that&apos;s wrong. The umpire and catcher have a natural, cooperative relationship back there and they&apos;re going to take care of each other. I don&apos;t know what is shared between our catchers and the umpires, but they seem to get along since I got off the umpires.&quot;
      </p>

      <p>
        <i>Dennis Read - Assistant Editor at Coaching Management</i>
      </p>

      <p>
        <b>KEYS: Respect the umpire!</b>
      </p>
    </>
  );
}
