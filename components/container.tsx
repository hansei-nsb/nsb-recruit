import { cn } from "@/lib/utils";

export function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flexclass = "flex flex-col items-center";

  return (
    <section className={cn("w-full px-5 py-10 ", flexclass)}>
      <div
        className={cn("max-w-full space-y-8 w-full lg:w-[1024px]", flexclass)}
      >
        {children}
      </div>
    </section>
  );
}
