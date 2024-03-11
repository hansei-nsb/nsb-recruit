import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  const flexclass = "flex flex-col items-center";

  return (
    <section className={cn("w-full px-5 py-10 ", flexclass)}>
      <div
        className={cn(
          "max-w-full space-y-8 w-full md:w-[768px]",
          className,
          flexclass
        )}
      >
        {children}
      </div>
    </section>
  );
}
