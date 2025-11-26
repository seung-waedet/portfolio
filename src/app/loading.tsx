export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="terminal inline-block">
          <div className="terminal-header">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span>loading.sh</span>
          </div>
          <div className="p-8 font-mono">
            <p className="text-lime animate-pulse">
              $ Loading<span className="animate-blink">_</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
