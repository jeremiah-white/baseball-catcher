import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide for Catchers",
  description: "Learn to be a better catcher with this baseball catchers guide.",
  keywords: [
    "baseball",
    "catcher",
    "catching",
    "baseball tips",
    "baseball guide",
    "catchers tips",
    "catching tips",
    "free catching guide",
    "catcher instruction",
  ],
};

export default function GuidePage() {
  return (
    <>
      <h1 className="page-header">Guide for Catchers</h1>

      <Image
        src="/images/pudge.jpg"
        width={200}
        height={250}
        alt="Ivan Rodriguez - Hall of Fame Catcher"
        style={{ float: "right", marginLeft: "1rem", marginBottom: "0.5rem" }}
      />

      <p>
        <span style={{ fontSize: "1.25rem" }}>O</span>ne area in baseball that
        receives little attention from coaches is teaching proper catching
        techniques. In general, there is not enough practice time devoted to it
        and the result is a lack of quality catchers at all levels. The reasons
        for this can be attributed to a number of things, but mainly, the blame
        falls on coaches for not setting aside practice time and a coach&apos;s lack
        of catching knowledge.
      </p>

      <p>
        The following guide is for beginning and experienced catchers and coaches.
        Visual aids are provided to clarify key concepts and provide examples of
        correct techniques. A list of key terms and phrases is also provided at
        the end of each section to review the important points covered in that
        section. You will find some advanced tips here as well. For your
        convenience, a glossary of terminology is also provided.
      </p>

      <h3>Job of the Catcher</h3>
      <p>
        The catcher has the most thankless job on the field, but yet, is the most
        important position besides the pitcher. As a catcher you are involved in
        every single play. You are the conductor of an orchestra and the players
        on the field are your instruments. A catcher has a number of
        responsibilities, each one just as important as the other; signaling
        pitches, relaying plays and bunt coverage, blocking wild pitches, and
        throwing out runners attempting to steal are only a few.
      </p>

      <p>
        As a catcher, you need to be aware of everything on the field and you need
        to know what to do in every possible situation. For example, you need to
        know: What is the score? How many outs are there? What is the count? What
        type of hitter is up (his tendencies—can he hit a curveball)? Who&apos;s on
        deck and what type of hitter is he? What pitch should I call next? Is the
        defense set? What about base runners? Are they fast? If the ball is hit to
        the gap where is the relay supposed to go? Is there a possible play at
        home?
      </p>

      <p>
        These questions and others need to be answered on every single pitch. This
        may seem like a lot to think about, especially to players just starting to
        learn the position, but with practice, experience, good coaching, and this
        tutorial, the answers to these questions will become second nature.
      </p>

      <h3>Get Started</h3>
      <p>
        Use the navigation on the left to explore the different sections of the
        guide. Start with the <Link href="/guide/stance">Stance</Link> section to
        learn the fundamentals, or jump directly to the topic you&apos;re interested
        in.
      </p>

      <p>
        <Link
          href="/images/Baseball_Catchers_Guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the complete Catchers Guide as a PDF
        </Link>
      </p>
    </>
  );
}
