import ModeToggle from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { LuAlignLeft } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function MobileNav() {
  const currentPath = useLocation().pathname;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between mx-4 mb-8 mt-4 min-[760px]:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="icon"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <LuAlignLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className=" pr-[10%] pl-[10%] w-max">
          <SheetHeader>
            <SheetTitle className="mt-6 self-start text-3xl">📄</SheetTitle>
            <SheetDescription>
              <nav className="flex items-start flex-col mt-[15%] gap-4 text-lg font-medium">
                <Link
                  onClick={() => setOpen(false)}
                  to="/"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    currentPath === "/"
                      ? "text-foreground border-b-ring border-b-2"
                      : "text-foreground/60"
                  )}
                >
                  Home
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/past-papers"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    currentPath === "/past-papers" ||
                      currentPath.includes("pdf-viewer")
                      ? "text-foreground border-b-ring border-b-2"
                      : "text-foreground/60"
                  )}
                >
                  Past Papers
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/add-submissions"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    currentPath === "/add-submissions"
                      ? "text-foreground border-b-ring border-b-2"
                      : "text-foreground/60"
                  )}
                >
                  Add Submission
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/contributors"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    currentPath === "/contributors"
                      ? "text-foreground border-b-ring border-b-2"
                      : "text-foreground/60"
                  )}
                >
                  Contributors
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/about"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    currentPath === "/about"
                      ? "text-foreground border-b-ring border-b-2"
                      : "text-foreground/60"
                  )}
                >
                  About
                </Link>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <ModeToggle />
    </div>
  );
}
