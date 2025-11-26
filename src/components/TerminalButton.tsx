import React from 'react'

interface TerminalButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export default function TerminalButton({
  children,
  variant = 'primary',
  onClick
}: TerminalButtonProps) {
  const baseClasses = "px-8 py-4 font-mono text-lg border-2 transition-all duration-100 hover:-translate-y-1 active:translate-y-0.5 active:scale-95 relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-opacity-50"

  const variantClasses = variant === 'primary'
    ? "bg-lime/10 text-lime border-lime hover:bg-lime hover:text-void hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:bg-lime/30 focus:ring-lime"
    : "bg-magenta/10 text-magenta border-magenta hover:bg-magenta hover:text-void hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] active:bg-magenta/30 focus:ring-magenta"

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}
