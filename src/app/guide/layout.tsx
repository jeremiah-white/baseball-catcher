import Sidebar from "@/components/Sidebar";
import AdSpot from "@/components/AdSpot";
import { guideSidebarSections } from "@/lib/guide-content";

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="content-wrapper">
      <aside className="left-sidebar">
        <Sidebar sections={guideSidebarSections} />
      </aside>
      <div className="main-content">
        <AdSpot size="banner" className="mb-4" />
        {children}
      </div>
      <aside className="right-sidebar">
        <AdSpot size="small" />
      </aside>
    </div>
  );
}
