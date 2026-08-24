import { cn } from "@/lib/utils";

export function Alert({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "error" | "success";
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-3 text-sm",
        tone === "error" && "border-destructive/30 bg-destructive/10 text-destructive",
        tone === "success" && "border-emerald-300 bg-emerald-50 text-emerald-800",
        tone === "neutral" && "border-border bg-muted/30 text-foreground"
      )}
      role="alert"
    >
      {children}
    </div>
  );
}

export function AlertTitle({ children }: { children: React.ReactNode }) {
  return <p className="font-semibold">{children}</p>;
}

export function AlertDescription({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-sm">{children}</p>;
}
