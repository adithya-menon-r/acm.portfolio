import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NotFound } from "@/components/NotFound";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1 bg-white pt-18 md:pt-16">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  ),
  notFoundComponent: () => <NotFound />,
});
