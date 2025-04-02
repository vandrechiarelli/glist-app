import Avatar from "@/components/avatar";
import MainNav from "@/components/main-nav";
import MobileNav from "@/components/mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 w-full">
      <div className="h-14 container flex center">
        {/* web app */}
        <MainNav />

        {/* mobile app */}
        <MobileNav />

        {/* web and mobile app */}
        <div className="flex items-center justify-end flex-1 p-1">
          <Avatar
            src="https://github.com/shadcn.png"
            alt="implement this function"
          />
        </div>
      </div>
    </header>
  );
}
