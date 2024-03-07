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

  const submit = async (values: z.infer<typeof formSchema>) => {
    "use server";

    console.log(values);
    const supabase = createClient();

    const { data: formdata } = await supabase.from("joinforms").select();

    if (formdata && formdata.length != 0) {
      const { error } = await supabase
        .from("joinforms")
        .update([
          {
            ...values,
          },
        ])
        .eq("user_id", user.id);

      if (error) {
        console.log(error);
      } else {
        redirect("/join/thanks");
      }
    } else {
      const { error } = await supabase.from("joinforms").insert([
        {
          ...values,
          user_id: user.id,
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        redirect("/join/thanks");
      }
    }
  };

  return (
    <Container>
      <JoinForm formdata={formdata} formaction={submit} />
    </Container>
  );
}
