import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catchers Job Covering Bases",
  description: "The catchers guide discusses the responsibility of a catcher to cover or back up bases in certain situations.",
  keywords: ["baseball", "catcher", "catching", "bunt", "wild throw", "cover bases"],
};

export default function CoveringBasesPage() {
  return (
    <>
      <h1 className="page-header">Catchers are Responsible for Covering Bases</h1>

      <p>
        The catching position is not for lazy players. You are involved in every play either through communication or through action. Besides the catching basics such as receiving, blocking, framing, and throwing, the catcher has other responsibilities that require movement from the home plate area.
      </p>

      <h3>Back Up 1st Base</h3>
      <p>
        The catcher has a responsibility to back up first base on routine grounders hit to the infielders. Your purpose is to keep the hitter from advancing to second on a wild throw to first. After the ball is hit, run hard along the fence or along the out of play line to back up first. Be aware of the angle the throw is coming from and be ready to react to a wild throw. You should get help from your second baseman and right fielder on throws from third base.
      </p>

      <p>
        With a runner on first base you can still back up first, just be aware that you may have to hustle back to the plate. <i>If there are runners on second or third base, stay at home. DO NOT back up first.</i> There may be a play at the plate.
      </p>

      <h3>Covering 3rd on a Bunt</h3>
      <p>
        A situation may arise where the opposing team is trying to bunt a runner on first to second base. You may have to cover third if your third baseman fields the ball. Depending on your coach&apos;s philosophy, the pitcher may cover instead. I don&apos;t like a pitcher covering any base, as there is a potential for injury on a close play. So, unless your coach tells you not to cover third, get there as soon as the third baseman communicates he is making the play on the bunt.
      </p>

      <p>
        <b>KEYS:</b> Back Up First Base, Be Aware of Base Runners
      </p>
    </>
  );
}
