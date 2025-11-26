import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <pre className="text-lime text-xs md:text-sm font-mono leading-tight mb-8">
{`
    ___   ___  _  _   
   /   | / _ \\| || |  
  / /| || | | | || |_ 
 / ___ || |_| |__   _|
/_/   |_\\___/   |_|  
                      
 ███╗   ██╗ ██████╗ ████████╗    ███████╗ ██████╗ ██╗   ██╗███╗   ██╗██████╗ 
 ████╗  ██║██╔═══██╗╚══██╔══╝    ██╔════╝██╔═══██╗██║   ██║████╗  ██║██╔══██╗
 ██╔██╗ ██║██║   ██║   ██║       █████╗  ██║   ██║██║   ██║██╔██╗ ██║██║  ██║
 ██║╚██╗██║██║   ██║   ██║       ██╔══╝  ██║   ██║██║   ██║██║╚██╗██║██║  ██║
 ██║ ╚████║╚██████╔╝   ██║       ██║     ╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝
 ╚═╝  ╚═══╝ ╚═════╝    ╚═╝       ╚═╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ 
`}
        </pre>

        <p className="text-2xl font-mono text-magenta mb-8">
          ERROR: Resource not found in filesystem
        </p>

        <div className="terminal inline-block text-left mb-8">
          <div className="terminal-header">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span>error.log</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-2">
            <p className="text-lime-dim">[ERROR] HTTP 404: Page not found</p>
            <p className="text-lime-dim">[INFO] Possible causes:</p>
            <p className="text-lime-dim ml-4">- Typo in URL</p>
            <p className="text-lime-dim ml-4">- Page moved or deleted</p>
            <p className="text-lime-dim ml-4">- You're lost in the matrix</p>
            <p className="text-magenta mt-4">[SUGGESTION] Return to safety</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link 
            href="/"
            className="border-2 border-lime px-6 py-3 font-mono text-lime hover:bg-lime hover:text-void transition-all"
          >
            $ cd ~
          </Link>
          <Link 
            href="/projects"
            className="border-2 border-magenta px-6 py-3 font-mono text-magenta hover:bg-magenta hover:text-void transition-all"
          >
            $ ls ./projects
          </Link>
        </div>
      </div>
    </main>
  )
}
