import Link from "next/link";
import { House, ScrollText, ShoppingBasket } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function MainNav() {
  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-3 lg:gap-4 ml-8">
        <Link href="/">
          <House />
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/app/glist">
                <ScrollText />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>List of Groceries</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/app/gitem">
                <ShoppingBasket />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>List of Items</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </div>
  );
}
