import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import silhouette from "@/assets/silhouette.png";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background relative overflow-x-hidden">
    {/* Left silhouette */}
    <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.08]">
      <img
        src={silhouette}
        alt=""
        width={220}
        height={440}
        className="max-h-[70vh] w-auto"
        style={{ transform: "scaleX(-1)" }}
        loading="lazy"
      />
    </div>

    {/* Right silhouette (mirrored) */}
    <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.08]">
      <img
        src={silhouette}
        alt=""
        width={220}
        height={440}
        className="max-h-[70vh] w-auto"
        loading="lazy"
      />
    </div>

    <Header />
    <main className="flex-1 pt-16 relative z-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;
