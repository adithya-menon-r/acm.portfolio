import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="bg-white text-zinc-800 font-sans min-h-[85vh] md:min-h-[80vh] flex flex-col justify-center items-center p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 w-full max-w-5xl">
        <div className="text-9xl md:text-[12rem] font-extrabold text-black-300 -mt-8 md:mt-0">
          <span className="whitespace-nowrap tracking-[-0.06em] md:tracking-[-0.02em]">
            :(
          </span>
        </div>

        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-zinc-900">
            404: PAGE_NOT_FOUND
          </h1>
          <p className="text-lg md:text-xl font-semibold text-zinc-600">
            Your page ran into a problem. The resource you were looking for
            could not be located or has been moved.
          </p>
          <p className="text-sm font-medium text-zinc-600">
            We're not *really* collecting error info, but if you want, you can
            report this, I guess...
          </p>

          <div className="mt-4 text-xs text-zinc-500">
            <p>What failed: resource_locator.sys</p>
            <p>
              Stop Code:{" "}
              <span className="text-red-500 font-medium">
                HTTP_404_NOT_FOUND
              </span>
            </p>
            <p>Kernel_Security_Check_Failure (0x000000D1)</p>
          </div>
        </div>
      </div>

      <Button
        asChild
        variant="default"
        className="
          mt-16
          font-sans
          bg-zinc-100 text-black font-semibold
          px-8 py-5
          rounded-md border-2 border-black
          shadow-[3px_3px_0_#fff]
          text-sm sm:text-base md:text-lg
          min-w-[160px] sm:min-w-[170px] md:min-w-[190px]
          hover:bg-zinc-200
          hover:translate-x-[3px] hover:translate-y-[3px]
          hover:shadow-none
          active:translate-x-[3px] active:translate-y-[3px]
          active:shadow-none
          transition-all duration-150
          focus-visible:ring-black
        "
      >
        <Link to="/" className="flex items-center gap-2">
          <Home className="h-5 w-5" />
          RETURN HOME
        </Link>
      </Button>
    </div>
  );
}
