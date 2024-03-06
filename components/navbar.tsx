import Link from "next/link";

import { ServerIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { ModeToggle } from "./theme-provider";

export function Navbar() {
  return (
    <header
      className={cn(
        // 스크롤시 고정된 해더
        "sticky top-0 z-50",
        // 해더 컨테이너
        "px-4 lg:px-6 h-14 items-center",
        "flex flex-col md:flex-row justify-between w-full",
        // 아크릴 효과
        "backdrop-filter backdrop-blur-lg"
      )}
    >
      <Link className="flex items-center justify-center gap-2" href="/">
        <ServerIcon className="w-5 h-auto" />
        <p className="text-xl font-bold">NSB</p>
      </Link>

      <ModeToggle />
    </header>
  );
}
