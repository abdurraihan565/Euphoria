import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:-translate-y-0.5 transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:opacity-70 hover:ring-4 hover:ring-primary/10 cursor-pointer",
        green:
          "group flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600  px-8 py-4 font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl cursor-pointer",
        white:
          "group flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 cursor-pointer",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 px-2",
        sm: "h-8 px-3",
        lg: "h-10 px-8",
        xl: "h-12 px-10",
        icon: "h-8 w-8",
        iconlg: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
