import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const panelBaseClasses = "rounded-3xl border p-8 shadow-xl transition " +
  "bg-white/95 border-gray-200/60 text-gray-900 hover:border-gray-300/80 hover:bg-white " +
  "dark:bg-slate-900/40 dark:border-white/10 dark:text-gray-100 dark:hover:border-cyan-300/60 dark:hover:bg-slate-900/60 " +
  "shadow-[var(--primary)]/20";

const Panel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  
  const {children, ...others } = props
  return (
    <div ref={ref} className={cn(panelBaseClasses, className)} {...others} >{children}
    
    ---
    
    </div>
  );
});

Panel.displayName = "Panel";

export { Panel };
