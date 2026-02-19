import LayoutBlogPost from "../blog/layout";

export default function Uses() {
  const sections = [
    {
      title: "Hardware",
      items: [
        { name: "MacBook Pro M2 Max", description: "32GB RAM, 1TB SSD" },
        { name: "LG UltraFine 27\"", description: "4K display for high-fidelity work" },
        { name: "Keychron K2V2", description: "Mechanical keyboard for tactile coding" },
        { name: "Logitech MX Master 3", description: "Precision navigation" },
      ],
    },
    {
      title: "Software",
      items: [
        { name: "VS Code", description: "Primary editor with Nim-inspired theme" },
        { name: "Warp", description: "Modern terminal for efficient CLI work" },
        { name: "Raycast", description: "Productivity and search tool" },
        { name: "Postman", description: "API development and testing" },
        { name: "Docker", description: "Containerization for consistent environments" },
      ],
    },
  ];

  return (
    <LayoutBlogPost>
      <header className="mb-8">
        <h1 className="text-xl font-medium sm:text-2xl">Uses.</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Tools, hardware, and software I use to build and design.
        </p>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-lg font-medium pb-2 border-b border-zinc-100 dark:border-zinc-800">{section.title}</h2>
            <div className="not-prose mt-6 space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LayoutBlogPost>
  );
}
