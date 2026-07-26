import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import silhouette from "@/assets/silhouette.png";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background relative overflow-x-hidden">
    {/* Golden gradient frame - 4 sides */}
    <div className="fixed top-0 left-0 right-0 h-[6px] pointer-events-none z-[9999]" style={{ background: "linear-gradient(90deg, #5c3d00, #d4af37, #f9e077, #ffd700, #e8c547, #b8860b, #d4af37, #5c3d00)" }} />
    <div className="fixed bottom-0 left-0 right-0 h-[6px] pointer-events-none z-[9999]" style={{ background: "linear-gradient(90deg, #5c3d00, #d4af37, #f9e077, #ffd700, #e8c547, #b8860b, #d4af37, #5c3d00)" }} />
    <div className="fixed top-0 left-0 bottom-0 w-[6px] pointer-events-none z-[9999]" style={{ background: "linear-gradient(180deg, #5c3d00, #d4af37, #f9e077, #ffd700, #e8c547, #b8860b, #d4af37, #5c3d00)" }} />
    <div className="fixed top-0 right-0 bottom-0 w-[6px] pointer-events-none z-[9999]" style={{ background: "linear-gradient(180deg, #5c3d00, #d4af37, #f9e077, #ffd700, #e8c547, #b8860b, #d4af37, #5c3d00)" }} />
    {/* Left silhouette */}
    <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.08]" style={{ left: "-5%" }}>
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
    <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.08]" style={{ right: "-5%" }}>
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
