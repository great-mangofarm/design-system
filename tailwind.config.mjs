const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
    theme: {
        screens: {
            sm: 'var(--breakpoint-sm)',
            md: 'var(--breakpoint-md)',
            lg: 'var(--breakpoint-lg)',
            xl: 'var(--breakpoint-xl)',
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
                mono: ["var(--font-mono)", ...fontFamily.mono],
            },
            fontSize: {
                'xs' :['var(--font-size-xs)', {lineHeight: 'var(--line-height-xs)'}],
            },
            letterSpacing: {
                tight: 'var(--letter-spacing)',
            },
            colors: {
                white: "var(--white)",
                black: "var(--black)",

                // 시스템 색상
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
                card: "var(--color-card)",
                "card-foreground": "var(--color-card-foreground)",
                popover: "var(--color-popover)",
                "popover-foreground": "var(--color-popover-foreground)",
                border: "var(--color-border)",
                input: "var(--color-input)",
                ring: "var(--color-ring)",
                "ring-focus": "var(--color-ring-focus)",
                "ring-error": "var(--color-ring-error)",
                surface: "var(--color-surface)",
                "surface-foreground": "var(--color-surface-foreground)",
                selection: "var(--color-selection)",
                "selection-foreground": "var(--color-selection-foreground)",


                // 상태별 색상
                primary: {
                    DEFAULT: "var(--color-primary)",
                    background: "var(--color-primary-background)",
                    foreground: "var(--color-primary-foreground)",
                    dark: "var(--color-primary-dark)",
                    light: "var(--color-primary-light)",
                },
                secondary: {
                    DEFAULT: "var(--color-secondary)",
                    background: "var(--color-secondary-background)",
                    foreground: "var(--color-secondary-foreground)",
                    light: "var(--color-secondary-light)",
                },

                warning: {
                    DEFAULT: "var(--color-warning)",
                    background: "var(--color-warning-background)",
                    foreground: "var(--color-warning-foreground)",
                    dark: "var(--color-warning-dark)",
                },
                error: {
                    DEFAULT: "var(--color-error)",
                    background: "var(--color-error-background)",
                    foreground: "var(--color-error-foreground)",
                    dark: "var(--color-error-dark)",
                },
                muted: {
                    DEFAULT: "var(--color-muted)",
                    foreground: "var(--color-muted-foreground)",
                    background: "var(--color-muted-background)",
                    light: "var(--color-muted-light)",
                },
                disabled: {
                    DEFAULT: "var(--color-disabled)",
                    background: "var(--color-disabled-background)",
                    foreground: "var(--color-disabled-foreground)",
                }
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/container-queries"),
    ],
}
