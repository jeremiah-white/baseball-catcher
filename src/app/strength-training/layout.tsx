import Sidebar from "@/components/Sidebar";
import AdSpot from "@/components/AdSpot";
import { strengthSidebarLinks } from "@/lib/strength-content";

const sidebarSections = [
  {
    title: "Strength Training",
    links: strengthSidebarLinks,
  },
];

export default function StrengthTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="content-wrapper">
      <aside className="left-sidebar">
        <Sidebar sections={sidebarSections} />
        <AdSpot size="sidebar" />
      </aside>

      <div className="main-content">{children}</div>

      <aside className="right-sidebar">
        <AdSpot size="small" />
      </aside>
    </div>
  );
}
