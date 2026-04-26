import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Personal Website
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            David Mao
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-300 sm:text-xl">
            Math, AI, music, research, projects, and whatever else I am
            building next.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl">
            <h2 className="text-2xl font-medium">Stay tuned.</h2>
            <p className="mt-3 text-zinc-400">
              This site is under construction. More projects, writing, and
              updates are coming soon.
            </p>
          </div>

          <div className="mt-10 flex justify-center gap-4 text-sm text-zinc-400">
            {/* <a href="mailto:your-email@example.com" className="hover:text-white">
              Email
            </a> */}
            <a href="https://github.com/Piedav" className="hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}