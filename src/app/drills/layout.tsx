import Sidebar from "@/components/Sidebar";
import AdSpot from "@/components/AdSpot";
import { drillsSidebarSections } from "@/lib/drills-content";

export default function DrillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="content-wrapper">
      <aside className="left-sidebar">
        <Sidebar sections={drillsSidebarSections} />
      </aside>
      <div className="main-content">{children}</div>
      <aside className="right-sidebar">
        <AdSpot size="small" />
      </aside>
    </div>
  );
}
