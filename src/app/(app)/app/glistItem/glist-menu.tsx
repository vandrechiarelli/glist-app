import Link from "next/link";
import {SquareCheckBig, RotateCcw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function GListMenu() {
  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-3 lg:gap-4 ml-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/app/glist">
                <SquareCheckBig color="#57f371" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/app/glistItems">
                <RotateCcw color="#323ff5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Undo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </div>
  );
}
