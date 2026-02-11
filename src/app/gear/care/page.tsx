import type { Metadata } from "next";
import Link from "next/link";
import AdSpot from "@/components/AdSpot";

export const metadata: Metadata = {
  title: "Gear Care and Maintenance",
  description: "How to take care of your catchers gear and extend its life.",
  keywords: ["baseball", "catcher", "gear care", "maintenance", "mitt care"],
};

export default function GearCarePage() {
  return (
    <div className="content-wrapper">
      <aside className="left-sidebar">
        <AdSpot size="sidebar" />
      </aside>

      <div className="main-content">
        <h1 className="page-header">Gear Care and Maintenance</h1>

        <p>
            Taking proper care of your catching gear will extend its life and keep
            it protecting you effectively. Here&apos;s how to maintain each piece of
            your equipment.
          </p>

          <h2>Catcher&apos;s Mitt Care</h2>
          <p>
            Your mitt is your most important tool. With proper care, a quality mitt
            can last for years.
          </p>
          <h4>Breaking In a New Mitt</h4>
          <ul>
            <li>Apply a light coat of glove oil or conditioner</li>
            <li>Work the pocket by catching balls repeatedly</li>
            <li>Store with a ball in the pocket, secured with a band</li>
            <li>Avoid excessive heat (no oven, microwave, or car dashboards)</li>
            <li>Be patient—a good break-in takes time</li>
          </ul>

          <h4>Ongoing Maintenance</h4>
          <ul>
            <li>Wipe down after each use to remove dirt and sweat</li>
            <li>Apply conditioner periodically to keep leather supple</li>
            <li>Check laces regularly and replace if worn</li>
            <li>Store in a cool, dry place</li>
            <li>Never leave your mitt in direct sunlight or a hot car</li>
          </ul>

          <h2>Protective Gear Care</h2>

          <h3>Mask/Helmet</h3>
          <ul>
            <li>Wipe down padding after games to prevent odor</li>
            <li>Check straps and snaps regularly</li>
            <li>Replace helmet if it takes a significant impact</li>
            <li>Clean cage with mild soap and water</li>
          </ul>

          <h3>Chest Protector</h3>
          <ul>
            <li>Air out after each use—don&apos;t leave in your bag</li>
            <li>Wipe down with damp cloth regularly</li>
            <li>Machine wash on gentle cycle if manufacturer allows</li>
            <li>Check straps and buckles for wear</li>
          </ul>

          <h3>Shin Guards</h3>
          <ul>
            <li>Wipe down after use to remove dirt</li>
            <li>Check straps regularly—they take a lot of abuse</li>
            <li>Replace knee padding if it becomes compressed</li>
            <li>Air out between uses to prevent odor</li>
          </ul>

          <h2>Preventing Odor</h2>
          <p>
            Catcher&apos;s gear can get smelly quickly. Here are some tips:
          </p>
          <ul>
            <li>Never store gear while it&apos;s still wet</li>
            <li>Use a gear bag with ventilation</li>
            <li>Use odor-absorbing products designed for sports equipment</li>
            <li>Wipe down gear after every use</li>
            <li>Consider antimicrobial spray for padding</li>
          </ul>

          <h2>When to Replace</h2>
          <p>
            Even well-maintained gear eventually needs to be replaced:
          </p>
          <ul>
            <li>Replace gear that has taken significant impact</li>
            <li>Replace if protective padding is compressed or worn</li>
            <li>Replace if straps no longer hold securely</li>
            <li>Replace if you&apos;ve outgrown it</li>
          </ul>

          <p>
            <Link href="/gear">← Back to Catchers Gear</Link>
          </p>
        </div>

      <aside className="right-sidebar">
        <AdSpot size="small" />
      </aside>
    </div>
  );
}
