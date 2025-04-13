// エラーがでてしまうのでcnを定義
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

// ✅ cn 関数を自前で定義
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

// "use client"

// import * as React from "react"
// import * as LabelPrimitive from "@radix-ui/react-label"
// import { cva } from "class-variance-authority";

// import { cn } from "@/lib/utils"

// const labelVariants = cva(
//   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// )

// const Label = React.forwardRef(({ className, ...props }, ref) => (
//   <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
// ))
// Label.displayName = LabelPrimitive.Root.displayName

// export { Label }
