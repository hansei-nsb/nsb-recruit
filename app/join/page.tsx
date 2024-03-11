import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { Container } from "@/components/container";
import JoinForm from "./form";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: formdata } = await supabase.from("joinforms").select();

  return (
    <Container>
      <h1 className="text-3xl font-bold">NSB 동아리 지원서</h1>
      <JoinForm formdata={formdata} />
    </Container>
  );
}
