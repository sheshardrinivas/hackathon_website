import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-transparent border-input flex h-9 w-full min-w-0  border-b bg-transparent px-3 py-1 text-base shadow-xs transition-[color,border] duration-1000 outline-none file:inline-flex file:h-7 file:border-b-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "not-placeholder-shown:border-b-slate-800 transition-[color,border] duration-1000",

        className,
      )}
      {...props}
    />
  );
}

export { Input };
