import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <Link
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "w-fit px-4"
      )}
      href="/logout"
    >
      로그아웃
    </Link>
  ) : (
    <Link
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "w-fit px-4"
      )}
      href="/login"
    >
      지원하기
    </Link>
  );
}

export async function JoinButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <Link className={cn(buttonVariants())} href="/join">
      지원서 보기
    </Link>
  ) : (
    <Link className={cn(buttonVariants())} href="/login">
      지원하기
    </Link>
  );
}
