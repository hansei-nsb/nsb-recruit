"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";

type Props = ComponentProps<"button"> & {};

export function SubmitButton({ children, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button
      {...props}
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className={cn(buttonVariants())}
    >
      {isPending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          잠시만 기다려주세요...
        </>
      ) : (
        children
      )}
    </button>
  );
}
