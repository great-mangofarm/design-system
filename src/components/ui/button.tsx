import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed  outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-white shadow-xs hover:bg-primary-dark disabled:bg-disabled-background disabled:text-disabled-foreground",
          secondary: "bg-secondary text-white shadow-xs hover:bg-secondary-light disabled:bg-disabled-background disabled:text-disabled-foreground",
            ghost:"bg-background text-primary border-2 border-primary hover:bg-primary-dark hover:text-white disabled:border-disabled disabled:text-disabled disabled:bg-muted-light",

            "solid-icon": "bg-primary-background text-primary-foreground hover:bg-primary-light rounded-full",
            "ghost-icon": "text-foreground hover:bg-muted-background  rounded-full",
          link:
            "text-primary underline-offset-4 hover:underline disabled:text-disabled-foreground disabled:no-underline disabled:hover:no-underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9 [&_svg]:w-4 [&_svg]:h-4",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
