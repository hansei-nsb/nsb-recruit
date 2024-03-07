import { AuthButton } from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Textarea } from "@/components/ui/textarea";
import JoinForm from "./form";

import { formSchema } from "./schema";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: formdata } = await supabase.from("joinforms").select();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    "use server";
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Container>
      <pre className="relative rounded bg-muted p-4 font-mono text-sm font-semibold">
        {JSON.stringify(formdata, null, 2)}
      </pre>

      <JoinForm formdata={formdata} formaction={onSubmit} />
    </Container>
  );
}
