import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Relaxed Stance",
  description: "Learn the proper relaxed stance for catchers with no runners on base.",
  keywords: ["baseball", "catcher", "relaxed stance", "catching stance"],
};

export default function StanceRelaxedPage() {
  return (
    <>
      <h1 className="page-header">The Relaxed Stance</h1>

      <Image
        src="/images/relaxedStance.png"
        width={250}
        height={300}
        alt="Relaxed Stance"
        style={{ float: "right", marginLeft: "1rem", marginBottom: "1rem" }}
      />

      <p>
        <span style={{ fontSize: "1.25rem" }}>T</span>he relaxed stance is used
        when there are no runners on base and less than two strikes on the batter.
        In this situation, you don&apos;t need to be ready to throw or block—your main
        focus is receiving the pitch.
      </p>

      <h3>Body Position</h3>
      <p>
        Squat with your feet shoulder-width apart or slightly wider. Your weight
        should be evenly distributed. Keep your hips and shoulders square to the
        pitcher. You can let your rear end drop close to your heels for comfort.
      </p>

      <h3>Feet Position</h3>
      <p>
        Your feet can be straight across or slightly staggered, with your throwing
        side foot slightly back. Point your toes forward or slightly outward. Find
        a position that is comfortable and allows you to stay low for an extended
        period.
      </p>

      <h3>Arms and Glove</h3>
      <p>
        Extend your glove hand toward the pitcher with your palm facing them. Keep
        your arm relaxed—not stiff. Your glove should present a good target, low
        in the strike zone.
      </p>

      <h3>Throwing Hand</h3>
      <p>
        In the relaxed stance, you can place your throwing hand behind your back
        or behind your right ankle/calf. This protects it from foul tips when
        there&apos;s no need to make a quick throw.
      </p>

      <h3>Transitioning to Ready Stance</h3>
      <p>
        When the situation changes—runner reaches base or two strikes on the
        batter—you need to quickly transition to the{" "}
        <Link href="/guide/stance-ready">ready stance</Link>. Practice this
        transition until it becomes automatic.
      </p>

      <p>
        <strong>KEYS:</strong> Comfortable, Low Target, Weight Balanced, Throwing
        Hand Protected
      </p>
    </>
  );
}
