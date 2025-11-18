import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center bg-white p-4 font-sans text-zinc-800 md:min-h-[80vh] md:p-8">
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:gap-20">
        <div className="text-black-300 -mt-8 text-9xl font-extrabold md:mt-0 md:text-[12rem]">
          <span className="tracking-[-0.06em] whitespace-nowrap md:tracking-[-0.02em]">
            :(
          </span>
        </div>

        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-3xl font-bold text-zinc-900 md:text-6xl">
            404: PAGE_NOT_FOUND
          </h1>
          <p className="text-lg font-semibold text-zinc-600 md:text-xl">
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
              <span className="font-medium text-red-500">
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
        className="mt-16 min-w-[160px] rounded-md border-2 border-black bg-zinc-100 px-8 py-5 font-sans text-sm font-semibold text-black shadow-[3px_3px_0_#fff] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-zinc-200 hover:shadow-none focus-visible:ring-black active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:min-w-[170px] sm:text-base md:min-w-[190px] md:text-lg"
      >
        <Link to="/" className="flex items-center gap-2">
          <Home className="h-5 w-5" />
          RETURN HOME
        </Link>
      </Button>
    </div>
  );
}
