import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import bgPattern from "@/assets/bg-pattern.jpg";

const Layout = ({ children }: { children: ReactNode }) => (
  <div
    className="min-h-screen flex flex-col"
    style={{
      backgroundImage: `url(${bgPattern})`,
      backgroundRepeat: "repeat",
      backgroundSize: "512px 512px",
    }}
  >
    <Header />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
  </div>
);

export default Layout;
