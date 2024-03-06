import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { buttonVariants, Button } from "./ui/button";
import { cn } from "@/lib/utils";

// import { usePathname } from "next/navigation";

export async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // const pathname = usePathname();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <Button onClick={signOut}>로그아웃</Button>
  ) : (
    <Link className={buttonVariants()} href="/login">
      로그인
    </Link>
  );
}

export async function JoinButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <Link className={cn(buttonVariants())} href="/protected">
      지원서 보기
    </Link>
  ) : (
    <Link className={cn(buttonVariants())} href="/login">
      지원하기
    </Link>
  );
}
