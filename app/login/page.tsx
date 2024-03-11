import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

import { Button } from "@/components/ui/button";

import { getURL } from "@/utils/helpers";
import {
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const messagemap: {
    [key: string]: string;
  } = {
    "wrong-input": "이메일 또는 비밀번호가 잘못되었습니다.",
    "email-sent": "확인 이메일을 전송하였습니다.",
  };

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: getURL("/auth/callback"),
        },
      });

      if (error) {
        return redirect("/login?message=wrong-input");
      } else {
        return redirect("/login?message=email-sent");
      }
    }

    return redirect("/join");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          이메일
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          비밀번호
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signIn}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
        >
          이메일로 로그인하기
        </SubmitButton>

        {searchParams?.message && (
          <Button variant="destructive" disabled className="py-8 space-x-2">
            {searchParams.message === "wrong-input" ? (
              <ExclamationTriangleIcon className="h-5 w-5" />
            ) : (
              <EnvelopeOpenIcon className="h-5 w-5" />
            )}
            <span>{messagemap[searchParams.message]}</span>
          </Button>
        )}
      </form>
    </div>
  );
}
