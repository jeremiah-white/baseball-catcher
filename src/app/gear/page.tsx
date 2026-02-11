import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AdSpot from "@/components/AdSpot";

export const metadata: Metadata = {
  title: "Catchers Gear and Equipment",
  description: "Information about catchers gear including masks, chest protectors, shin guards, and mitts.",
  keywords: ["baseball", "catcher", "gear", "equipment", "chest protector", "mask", "shin guards", "mitt"],
};

export default function GearPage() {
  return (
    <div className="content-wrapper">
      <aside className="left-sidebar">
        <AdSpot size="sidebar" />
      </aside>

      <div className="main-content">
        <h1 className="page-header">Catchers Gear and Equipment</h1>

        <p>
            If you are serious about catching, you should consider buying your own
            set of catcher&apos;s gear. This gear should fit you properly. Proper
            fitting gear is important for two main reasons: safety and performance.
            A complete set of gear and a glove can be fairly expensive. I suggest
            you shop around different sports stores in your area or check online to
            find equipment in your price range.
          </p>

          <h2>How Much Should You Spend?</h2>
          <p>
            Expect to spend about $150-200 for a complete set of basic catchers gear
            and a catchers glove. Higher end gear and the top of the line gloves can
            combine for a $900+ price tag. A typical or average set of gear with a
            decent mitt will run you around the $300-400 range.
          </p>
          <p>
            If you still have a lot of growing to do, it is probably not a good idea
            to invest in a full set of gear. Your team should have gear you can use.
            However, I would recommend buying your own catchers glove. Make sure
            everything you purchase has a warranty!
          </p>

          <h2>What You Need</h2>

          <h3>Catcher&apos;s Mask/Helmet</h3>
          <Image
            src="/images/catchersmask.jpg"
            width={150}
            height={150}
            alt="Catchers Mask"
            style={{ float: "right", marginLeft: "1rem" }}
          />
          <p>
            Your mask protects your face from foul tips, wild pitches, and
            collisions. There are two main styles: the traditional two-piece mask
            that attaches to a helmet, and the hockey-style one-piece helmet. Both
            offer good protection—choose the style you&apos;re most comfortable with.
          </p>
          <p>
            Look for a mask with good padding, a throat guard, and adequate
            visibility. It should fit snugly without being too tight.
          </p>
          <div style={{ clear: "both" }} />

          <h3>Chest Protector</h3>
          <Image
            src="/images/chestprotector.jpg"
            width={150}
            height={150}
            alt="Chest Protector"
            style={{ float: "right", marginLeft: "1rem" }}
          />
          <p>
            The chest protector guards your chest, shoulders, and abdomen from
            pitched and batted balls. Modern chest protectors are lighter and more
            flexible than older models while still providing excellent protection.
          </p>
          <p>
            Make sure your chest protector covers your collarbone and extends past
            your belt. The shoulder caps should protect without restricting your
            throwing motion.
          </p>
          <div style={{ clear: "both" }} />

          <h3>Shin Guards</h3>
          <Image
            src="/images/shinguards.jpg"
            width={150}
            height={150}
            alt="Shin Guards"
            style={{ float: "right", marginLeft: "1rem" }}
          />
          <p>
            Shin guards protect your knees, shins, and ankles. They take a lot of
            abuse from foul tips and wild pitches. Look for guards with good knee
            padding and secure straps that won&apos;t come loose.
          </p>
          <p>
            Shin guards should cover from just above your ankle to just above your
            knee. They shouldn&apos;t be so long that they interfere with your
            crouching.
          </p>
          <div style={{ clear: "both" }} />

          <h3>Catcher&apos;s Mitt</h3>
          <Image
            src="/images/catchermitt.jpg"
            width={150}
            height={150}
            alt="Catchers Mitt"
            style={{ float: "right", marginLeft: "1rem" }}
          />
          <p>
            Your mitt is the most personal piece of equipment. Unlike the
            protective gear, which your team may provide, most serious catchers own
            their own mitt.
          </p>
          <p>
            Catcher&apos;s mitts come in different sizes (usually 32.5&quot; to 34&quot;).
            Younger catchers typically use smaller mitts. The mitt should feel
            comfortable and allow you to close it easily around the ball.
          </p>
          <div style={{ clear: "both" }} />

          <h3>Protective Cup</h3>
          <p>
            A protective cup is essential for catchers. Wear it. Every pitch. No
            exceptions. Athletic cups come in various materials—choose one that
            provides good protection while remaining comfortable during long games.
          </p>

          <h2>Top Brands</h2>
          <p>
            Brands that sell quality catcher&apos;s gear include: Rawlings, Easton,
            Wilson, Mizuno, All Star, Under Armour, and Nike.
          </p>
          <p>
            For gloves specifically, popular brands include: Wilson, Easton,
            Mizuno, Rawlings, Akadema, and Nokona.
          </p>

          <h2>Gear Care</h2>
          <p>
            Taking care of your gear will extend its life and keep it performing
            well. Learn more about{" "}
            <Link href="/gear/care">gear care and maintenance</Link>.
          </p>
        </div>

      <aside className="right-sidebar">
        <AdSpot size="small" />
      </aside>
    </div>
  );
}
