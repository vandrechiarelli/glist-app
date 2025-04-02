import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, House, ScrollText, ShoppingBasket } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="md:hidden p-4">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
              <Link href="/">
                <House />
              </Link>
              <Link href="/app/glist">
                <ScrollText />
              </Link>
              <Link href="/app/gitem">
                <ShoppingBasket />
              </Link>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
