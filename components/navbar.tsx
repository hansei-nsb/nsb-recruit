"use client";

import Link from "next/link";

import { ServerIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { ModeToggle } from "./theme-provider";

import { buttonVariants, Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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
      <Link className="flex items-center justify-center gap-2" href="/">
        <ServerIcon className="w-5 h-auto" />
        <p className="text-xl font-bold">NSB</p>
      </Link>

      <NavigationMenu className="ml-auto flex items-center gap-4 sm:gap-6">
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={buttonVariants({ variant: "ghost" })}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={buttonVariants({ variant: "ghost" })}
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink
                className={buttonVariants({ variant: "secondary" })}
              >
                지원하기
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
