import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import silhouetteLeft from "@/assets/silhouette-left.png";
import silhouetteRight from "@/assets/silhouette-right.png";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background relative overflow-x-hidden">
    {/* Left silhouette */}
    <div
      className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.07]"
    >
      <img
        src={silhouetteLeft}
        alt=""
        width={280}
        height={560}
        className="max-h-[80vh] w-auto"
        loading="lazy"
      />
    </div>

    {/* Right silhouette */}
    <div
      className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.07]"
    >
      <img
        src={silhouetteRight}
        alt=""
        width={280}
        height={560}
        className="max-h-[80vh] w-auto"
        loading="lazy"
      />
    </div>

    <Header />
    <main className="flex-1 pt-16 relative z-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;
