import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NotFound } from "@/components/NotFound";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full bg-white relative">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
      <div className="flex flex-col min-h-screen relative z-10">
        <Header />
        <div className="flex-1 pt-18 md:pt-16">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  ),
  notFoundComponent: () => <NotFound />,
});
