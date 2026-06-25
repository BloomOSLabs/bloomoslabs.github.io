import { cva } from "class-variance-authority";

export const iconButtonVariants = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "relative",
        "overflow-hidden",
        "transition-all",
        "duration-200",
        "outline-none",
        "select-none",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
    ],
    {
        variants: {
            size: {
                small: "h-10 w-10",
                medium: "h-12 w-12",
                large: "h-14 w-14",
            },
        },

        defaultVariants: {
            size: "medium",
        },
    }
);