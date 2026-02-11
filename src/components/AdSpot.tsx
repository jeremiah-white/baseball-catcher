interface AdSpotProps {
  size?: "sidebar" | "banner" | "leaderboard" | "square" | "small";
  className?: string;
}

/**
 * Ad placeholder component with bc-adspot class
 *
 * To hide all ads site-wide, add the "hide-ads" class to the body or a parent element,
 * or use CSS: .bc-adspot { display: none; }
 *
 * Sizes:
 * - sidebar: 120x600 (skyscraper)
 * - banner: 468x60 (standard banner)
 * - leaderboard: 728x90 (leaderboard)
 * - square: 250x250 (medium rectangle)
 * - small: 120x240 (vertical banner)
 */
export default function AdSpot({ size = "banner", className = "" }: AdSpotProps) {
  return (
    <div
      className={`bc-adspot bc-adspot--${size} ${className}`}
      role="complementary"
      aria-label="Advertisement placeholder"
    />
  );
}
