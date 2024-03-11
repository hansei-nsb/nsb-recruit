import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

import { Button } from "@/components/ui/button";

import { getURL } from "@/utils/helpers";

import {
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Provider } from "@supabase/supabase-js";
import { MessageCircle } from "lucide-react";

function isValidEmail(email: string) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const messagemap: {
    [key: string]: string;
  } = {
    "wrong-input": "이메일 또는 비밀번호가 잘못되었습니다.",
    "unknown-error": "알 수 없는 오류가 발생하였습니다.",
    "email-sent": "확인 이메일을 전송하였습니다.",
    "password-to-short": "비밀번호가 너무 짧습니다.",
    "email-format-wrong": "이메일 형식이 잘못되었습니다.",
  };

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    if (password.length < 7) {
      return redirect("/login?message=password-to-short");
    }

    if (!isValidEmail(email)) {
      return redirect("/login?message=email-format-wrong");
    }

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

  const signInWithOauth = async (provider: string) => {
    "use server";
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: getURL("/auth/callback"),
      },
    });

    if (error) {
      return redirect("/login?message=unknown-error");
    }

    redirect(data?.url);
  };

  const signInWithGithub = async () => {
    "use server";
    return signInWithOauth("github");
  };

  const signInWithKakao = async () => {
    "use server";
    return signInWithOauth("kakao");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form className="animate-in flex flex-col justify-center gap-2 text-foreground">
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
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2 space-x-2"
        >
          <EnvelopeClosedIcon className="h-5 w-5 mr-2" />
          <span>이메일로 로그인하기</span>
        </SubmitButton>
      </form>

      {/* ---- or ---- */}

      <div className="flex items-center justify-center space-x-4 my-3">
        <hr className="flex-1" />
        <span className="text-foreground">or</span>
        <hr className="flex-1" />
      </div>

      <form action={signInWithGithub}>
        <Button className="rounded-md px-4 py-2 text-foreground bg-gray-800 space-x-2 w-full hover:bg-gray-700">
          <GitHubLogoIcon className="h-5 w-5" />
          <span>깃허브로 로그인하기</span>
        </Button>
      </form>

      <form action={signInWithKakao}>
        <Button className="rounded-md px-4 py-2 text-foreground mb-6 bg-[#FEE500] space-x-2 w-full flex items-center justify-center text-black">
          <MessageCircle className="h-5 w-5" />
          <span>카카오로 로그인하기</span>
        </Button>
      </form>

      {searchParams?.message && (
        <Button variant="destructive" disabled className="py-8 space-x-2">
          {searchParams.message !== "email-sent" ? (
            <ExclamationTriangleIcon className="h-5 w-5" />
          ) : (
            <EnvelopeOpenIcon className="h-5 w-5" />
          )}
          <span>{messagemap[searchParams.message]}</span>
        </Button>
      )}
    </div>
  );
}
