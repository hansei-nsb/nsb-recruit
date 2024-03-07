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

  return (
    <Container>
      <div className="flex items-center gap-4">Hey, {user.email}!</div>
      <h1 className="text-4xl font-bold tracking-tighter">
        Thanks for joining!
      </h1>
    </Container>
  );
}
