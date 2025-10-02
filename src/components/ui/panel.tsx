import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const panelBaseClasses = "rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-xl shadow-cyan-500 transition hover:border-cyan-300/60 hover:bg-slate-900/60";

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
