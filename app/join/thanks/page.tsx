"use client";

import { useSearchParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import Fire from "@/components/confetti";
import { useEffect } from "react";

export default async function Page() {
  const searchParams = useSearchParams();

  const isUpdate = searchParams.get("update") === "true";
  const router = useRouter();

  useEffect(() => {
    Fire();
  }, []);

  return (
    <Container>
      <h1 className="text-4xl font-bold tracking-tighter">
        지원해주셔서 감사합니다. 🎉
      </h1>
      {isUpdate ? (
        <p>지원자님의 양식이 업데이트되었습니다.</p>
      ) : (
        <p>지원자님의 양식이 제출되었습니다.</p>
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
