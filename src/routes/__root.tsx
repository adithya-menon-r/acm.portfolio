import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NotFound } from "@/components/NotFound";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 pt-18 md:pt-16 bg-white">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  ),
  notFoundComponent: () => <NotFound />,
});
