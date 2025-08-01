import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold  lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold  first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7  tracking-tight",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2 tracking-tight",
      ol: "my-6 ml-6 list-decimal [&>li]:mt-2 tracking-tight",
      lead: "text-xl text-muted-foreground tracking-tight",
      large: "text-lg font-semibold tracking-tight",
      small: "text-sm font-medium leading-none tracking-tight",
      caption: "text-xs font-medium tracking-tight",
      mono: "font-mono text-sm font-medium"
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

type TypographyVariant = NonNullable<VariantProps<typeof typographyVariants>["variant"]>

interface BaseTypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
}

type TypographyElement<T extends React.ElementType> = {
  as?: T
} & Omit<React.ComponentPropsWithRef<T>, keyof BaseTypographyProps> & BaseTypographyProps

const getDefaultElement = (variant: TypographyVariant | undefined): React.ElementType => {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
      return variant
    case "ul":
      return "ul"
    case "ol":
      return "ol"
  case "caption":
      return "span"
  case "mono":
      return "code"
    default:
      return "p"
  }
}

function Typography<T extends React.ElementType = "p">({
  className,
  variant,
  as,
  ...props
}: TypographyElement<T>) {
  const Component = as || getDefaultElement(variant)
  
  return React.createElement(Component, {
    className: cn(typographyVariants({ variant, className })),
    ...props,
  })
}

export { Typography, typographyVariants, type TypographyVariant }
