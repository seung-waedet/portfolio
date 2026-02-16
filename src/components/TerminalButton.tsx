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
    ? "bg-accent/5 text-accent border-accent/20 hover:border-accent hover:bg-accent/10 hover:text-silver transition-all"
    : "border-slate-dim/20 text-slate-dim hover:border-accent hover:text-silver transition-all"

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}
