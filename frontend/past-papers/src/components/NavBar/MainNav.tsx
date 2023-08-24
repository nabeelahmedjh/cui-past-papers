import ModeToggle from "./ModeToggle";

import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function MainNav() {
  const currentPath = useLocation().pathname;

  return (
    <div className="flex justify-center">
      <div className="mt-4 mb-12 min-[760px]:flex items-center justify-between hidden max-w-7xl gap-x-20">
        <p className="text-3xl flex-shrink-0 ml-2">📄</p>
        <nav className="flex items-center space-x-6 text-md font-medium flex-shrink-0">
          <Link
            to="/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              currentPath === "/"
                ? "text-foreground ring-2 ring-primary-100 rounded-sm p-2"
                : "text-foreground/60"
            )}
          >
            Home
          </Link>
          <Link
            to="/past-papers"
            className={cn(
              "transition-colors hover:text-foreground/80",
              currentPath === "/past-papers"
                ? "text-foreground ring-2 ring-primary-100 rounded-sm p-2"
                : "text-foreground/60"
            )}
          >
            Past Papers
          </Link>
          <Link
            to="/add-submissions"
            className={cn(
              "transition-colors hover:text-foreground/80",
              currentPath === "/add-submissions"
                ? "text-foreground ring-2 ring-primary-100 rounded-sm p-2"
                : "text-foreground/60"
            )}
          >
            Add Submission
          </Link>
          <Link
            to="/contributors"
            className={cn(
              "transition-colors hover:text-foreground/80",
              currentPath === "/contributors"
                ? "text-foreground ring-2 ring-primary-100 rounded-sm p-2"
                : "text-foreground/60"
            )}
          >
            Contributors
          </Link>
          <Link
            to="/about"
            className={cn(
              "transition-colors hover:text-foreground/80",
              currentPath === "/about"
                ? "text-foreground ring-2 ring-primary-100 rounded-sm p-2"
                : "text-foreground/60"
            )}
          >
            About
          </Link>
        </nav>
        <div className=" flex-shrink-0 mr-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
