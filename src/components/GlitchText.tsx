'use client'

export default function GlitchText({ text }: { text: string }) {
  return (
    <span className="glitch inline-block" data-text={text}>
      {text}
    </span>
  )
}
