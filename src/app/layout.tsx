import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: {
    default: "Baseball Catcher - Catchers Guide, Drills, and Gear",
    template: "%s | Baseball-Catcher.com",
  },
  description:
    "Learn to be a better baseball catcher. Discover catching drills to improve your game. Develop your own baseball strength training program.",
  keywords: [
    "baseball",
    "catcher",
    "catching",
    "baseball tips",
    "baseball guide",
    "catchers tips",
    "catching tips",
    "baseball gear",
    "baseball equipment",
    "free catching guide",
    "catcher instruction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-layout">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
