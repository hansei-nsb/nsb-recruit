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
      <div className="flex items-center gap-4">Hey, {user.email}!</div>
      <h1 className="text-4xl font-bold tracking-tighter">
        you really want to logout?
      </h1>
      <form action={signOut}>
        <Button>logout</Button>
      </form>
    </Container>
  );
}
