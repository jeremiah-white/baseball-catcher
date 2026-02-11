// Guide section sidebar navigation
export const guideSidebarSections = [
  {
    title: "Basic Skills",
    links: [
      { href: "/guide/stance", label: "Stance" },
      { href: "/guide/stance-relaxed", label: "- Relaxed Stance" },
      { href: "/guide/stance-ready", label: "- Ready Stance" },
      { href: "/guide/settingup", label: "Setting Up" },
      { href: "/guide/receiving", label: "Receiving" },
      { href: "/guide/framing", label: "Framing" },
      { href: "/guide/blocking", label: "Blocking" },
      { href: "/guide/throwing", label: "Throwing" },
      { href: "/guide/leadership", label: "Leadership" },
    ],
  },
  {
    title: "In-depth Skills",
    links: [
      { href: "/guide/relays-cutoffs", label: "Relays, Cutoffs, and Plays at Home" },
      { href: "/guide/signals", label: "Signals" },
      { href: "/guide/calling-a-game", label: "Calling A Game" },
      { href: "/guide/bullpens", label: "Catching Bullpens" },
      { href: "/guide/covering-bases", label: "Covering Bases" },
      { href: "/guide/pre-game", label: "Pre-Game Routine" },
      { href: "/guide/rapport", label: "Umpire Rapport" },
      { href: "/guide/misc", label: "Misc. Situations and Plays" },
    ],
  },
  {
    title: "Reference",
    links: [
      { href: "/guide/glossary", label: "Glossary" },
    ],
  },
];

// Page metadata for guide pages
export interface GuidePageMeta {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

export const guidePages: GuidePageMeta[] = [
  {
    slug: "stance",
    title: "Catchers Stance",
    description: "The baseball catchers guide discusses the proper stances for a catcher.",
    keywords: ["baseball", "catcher", "catching", "catcher guide", "stance", "ready stance", "relaxed stance"],
  },
  {
    slug: "stance-relaxed",
    title: "Relaxed Stance",
    description: "Learn the proper relaxed stance for catchers with no runners on base.",
    keywords: ["baseball", "catcher", "relaxed stance", "catching stance"],
  },
  {
    slug: "stance-ready",
    title: "Ready Stance",
    description: "Learn the proper ready stance for catchers with runners on base.",
    keywords: ["baseball", "catcher", "ready stance", "catching stance"],
  },
  {
    slug: "settingup",
    title: "Setting Up Behind the Plate",
    description: "Learn how to properly set up behind the plate as a catcher.",
    keywords: ["baseball", "catcher", "setting up", "positioning"],
  },
  {
    slug: "receiving",
    title: "Receiving Techniques",
    description: "The catchers guide discusses the proper receiving techniques for a catcher.",
    keywords: ["baseball", "catcher", "receiving", "catching techniques"],
  },
  {
    slug: "framing",
    title: "Framing Pitches",
    description: "Learn the art of framing pitches to get more strike calls.",
    keywords: ["baseball", "catcher", "framing", "pitch framing"],
  },
  {
    slug: "blocking",
    title: "Blocking Pitches",
    description: "The catchers guide discusses the skills required to block baseballs or pitches in the dirt.",
    keywords: ["baseball", "catcher", "blocking", "wild pitch"],
  },
  {
    slug: "throwing",
    title: "Throwing Techniques",
    description: "Learn proper throwing mechanics for catchers.",
    keywords: ["baseball", "catcher", "throwing", "arm strength"],
  },
  {
    slug: "throwing-secondbase",
    title: "Throwing to Second Base",
    description: "Techniques for throwing out runners stealing second base.",
    keywords: ["baseball", "catcher", "throwing", "second base", "stealing"],
  },
  {
    slug: "throwing-thirdbase",
    title: "Throwing to Third Base",
    description: "Techniques for throwing out runners stealing third base.",
    keywords: ["baseball", "catcher", "throwing", "third base"],
  },
  {
    slug: "other-throws",
    title: "Other Throws",
    description: "Various throwing situations for catchers.",
    keywords: ["baseball", "catcher", "throwing", "pickoffs"],
  },
  {
    slug: "leadership",
    title: "Catcher Leadership",
    description: "The importance of leadership as a catcher.",
    keywords: ["baseball", "catcher", "leadership", "team"],
  },
  {
    slug: "relays-cutoffs",
    title: "Relays, Cutoffs, and Plays at Home",
    description: "Understanding relay throws, cutoffs, and plays at home plate.",
    keywords: ["baseball", "catcher", "relays", "cutoffs", "home plate"],
  },
  {
    slug: "signals",
    title: "Catcher Signals",
    description: "How to give signals to your pitcher and infielders.",
    keywords: ["baseball", "catcher", "signals", "signs"],
  },
  {
    slug: "calling-a-game",
    title: "Calling A Game",
    description: "How to call pitches and manage the game as a catcher.",
    keywords: ["baseball", "catcher", "calling pitches", "game management"],
  },
  {
    slug: "bullpens",
    title: "Catching Bullpens",
    description: "How to catch bullpen sessions effectively.",
    keywords: ["baseball", "catcher", "bullpen", "warm up"],
  },
  {
    slug: "covering-bases",
    title: "Covering Bases",
    description: "When and how catchers should cover bases.",
    keywords: ["baseball", "catcher", "covering bases", "fielding"],
  },
  {
    slug: "pre-game",
    title: "Pre-Game Routine",
    description: "Establishing an effective pre-game routine as a catcher.",
    keywords: ["baseball", "catcher", "pre-game", "routine", "warm up"],
  },
  {
    slug: "rapport",
    title: "Umpire Rapport",
    description: "Building a good relationship with umpires.",
    keywords: ["baseball", "catcher", "umpire", "rapport"],
  },
  {
    slug: "misc",
    title: "Miscellaneous Situations and Plays",
    description: "Various situations and plays catchers need to know.",
    keywords: ["baseball", "catcher", "situations", "plays"],
  },
  {
    slug: "glossary",
    title: "Catcher Glossary",
    description: "Glossary of catching terms and phrases.",
    keywords: ["baseball", "catcher", "glossary", "terms"],
  },
];

export function getGuidePage(slug: string): GuidePageMeta | undefined {
  return guidePages.find((page) => page.slug === slug);
}
