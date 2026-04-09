// Helper: render a div with a CSS gradient, avoiding Tailwind v4 gradient class issues
import React from "react";

interface GradientDivProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient: string;   // e.g. "135deg, #6c3aff, #9333ea"
  rounded?: string;   // e.g. "1rem"
  children?: React.ReactNode;
}

export function GradientDiv({ gradient, rounded, style, children, ...props }: GradientDivProps) {
  return (
    <div
      {...props}
      style={{
        background: `linear-gradient(${gradient})`,
        borderRadius: rounded,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
