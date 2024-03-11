"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { getURL } from "@/utils/helpers";

import { Provider } from "@supabase/supabase-js";

function isValidEmail(email: string) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

export async function redirectToPath(path: string) {
  return redirect(path);
}

export async function signIn(formData: FormData) {
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
}

export async function signInWithOauth(provider: string) {
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
}

export async function signInWithGithub() {
  return signInWithOauth("github");
}

export async function signInWithKakao() {
  return signInWithOauth("kakao");
}

export async function SignOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/");
}

export async function updateJoinForms(values: any) {
  console.log(values);
  const supabase = createClient();

  const { data: formdata } = await supabase.from("joinforms").select();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id != null) {
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
        redirect("/join/thanks?update=true");
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
  }
}
