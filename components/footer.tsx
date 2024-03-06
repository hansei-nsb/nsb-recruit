import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 text-center text-xs flex flex-col md:flex-row justify-between gap-4">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Network Server Build. All rights reserved.
      </p>

      <nav className="flex gap-4 sm:gap-6  justify-center md:justify-end">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
