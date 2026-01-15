
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl bg-black/40 border border-white/10 shadow hover:shadow-lg transition",
        className
      )}
      {...props}
    />
  );
}
