"use client";

import { redirect, useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

export default async function Page() {
  const params = useParams();
  const isUpdate = params?.update !== "true";
  const router = useRouter();

  return (
    <Container>
      <h1 className="text-4xl font-bold tracking-tighter">
        "Thanks for joining!"
      </h1>
      {isUpdate ? (
        <p>Your form has been updated.</p>
      ) : (
        <p>Your form has been submitted.</p>
      )}
      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        랜딩 페이지로 돌아가기
      </Button>
    </Container>
  );
}
