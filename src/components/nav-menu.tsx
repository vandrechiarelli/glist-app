"use client";

import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { NavMenuProps } from "@/types/nav-menu-props";

export default function NavMenu({ items }: NavMenuProps) {
  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-3 lg:gap-4 ml-8">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger asChild>
                  {item.onClick ? (
                    <button onClick={item.onClick}>
                      <Icon color={item.color} />
                    </button>
                  ) : (
                    <Link href={item.href || "#"}>
                      <Icon color={item.color} />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </nav>
    </div>
  );
}