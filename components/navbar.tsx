import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header
      className={cn(
        // 스크롤시 고정된 해더
        "sticky top-0 z-50",
        // 해더 컨테이너
        "px-4 lg:px-6 h-14 flex items-center",
        // 아크릴 효과
        "backdrop-filter backdrop-blur-lg"
      )}
    >
      <Link className="flex items-center justify-center" href="#">
        NSB
        <span className="sr-only">Network Server Build</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Events
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Membership
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
