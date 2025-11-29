"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn" | "revealText"
    delay?: number
    duration?: number
    threshold?: number
    triggerOnce?: boolean
}

export function ScrollReveal({
    children,
    className,
    animation = "fadeInUp",
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    triggerOnce = true,
}: ScrollRevealProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce })

    const getAnimationClass = () => {
        switch (animation) {
            case "fadeInUp":
                return "animate-fadeInUp"
            case "fadeIn":
                return "animate-fadeIn"
            case "slideInLeft":
                return "animate-slideInLeft"
            case "slideInRight":
                return "animate-slideInRight"
            case "scaleIn":
                return "animate-fadeInScale"
            case "revealText":
                return "animate-revealText"
            default:
                return "animate-fadeInUp"
        }
    }

    return (
        <div
            ref={ref as any}
            className={cn(
                "transition-opacity duration-500",
                isVisible ? "opacity-100" : "opacity-0",
                isVisible && getAnimationClass(),
                className
            )}
            style={{
                animationDelay: `${delay}ms`,
                animationDuration: `${duration}s`,
                animationFillMode: "both",
            }}
        >
            {children}
        </div>
    )
}
