import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return (
    <Container>
      <div className="flex items-center gap-4">hey, {user.email}!</div>
      <h1 className="text-3xl font-bold tracking-tighter text-nowrap">
        진짜 로그아웃 하실 건가요?
      </h1>
      <form action={signOut}>
        <Button>로그아웃</Button>
      </form>
    </Container>
  );
}
