"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SignOut } from "@/utils/auth-helpers/server";

export default function Page() {
  const supabase = createClient();

  const [user, setUser] = useState({ email: "" });
  const router = useRouter();

  useEffect(() => {
    const action = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user || !user.email) {
        router.push("/");
        return;
      }

      setUser({ email: user.email });
    };

    action();
  }, []);

  return (
    <>
      <div className="flex items-center gap-4">hey, {user.email}!</div>
      <h1 className="text-3xl font-bold tracking-tighter text-nowrap">
        진짜 로그아웃 하실 건가요?
      </h1>
      <form action={SignOut}>
        <Button>로그아웃</Button>
      </form>
    </>
  );
}
