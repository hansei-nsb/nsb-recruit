import { AuthButton } from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { JoinFrom } from "./form";
import { Container } from "@/components/container";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return (
    // <div>
    //   <div className="flex-1 w-full flex flex-col gap-20 items-center">
    //     login successful!!
    //   </div>

    //   <div className="flex items-center gap-4">Hey, {user.email}!</div>
    //   <form action={signOut}>
    //     <Button>logout</Button>
    //   </form>

    // </div>

    <Container>
      <JoinFrom />
    </Container>
  );
}
