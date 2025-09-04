// react-ts-tailwind-demo.tsx
// Single-file React + TypeScript demo page using Tailwind CSS
// Drop this component into a Vite/CRA React + TS project that has Tailwind configured.

import type { JSX } from "react";


export default function ReactTSTailwindDemo(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      {/* NAVBAR */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">DV</div>
            <span className="font-semibold text-lg">Demo UI</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-indigo-600" href="#features">Features</a>
            <a className="hover:text-indigo-600" href="#pricing">Pricing</a>
            <a className="hover:text-indigo-600" href="#contact">Contact</a>
            <button className="ml-4 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">Get Started</button>
          </nav>

          {/* mobile menu button */}
          <div className="md:hidden">
            <button aria-label="open menu" className="p-2 rounded-md border">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Beautiful, minimal <span className="text-indigo-600">React + TypeScript</span> demo
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              A tiny static page built with Tailwind CSS. Use it as a starting point for dashboards,
              marketing pages, or internal tooling. Responsive, accessible and easy to extend.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="px-5 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">Primary Action</button>
              <button className="px-5 py-2 rounded-md border border-gray-200 hover:bg-gray-100">Secondary</button>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center font-semibold">✓</div>
                <div>
                  <div className="text-sm font-medium">Fully typed</div>
                  <div className="text-xs text-gray-500">TypeScript ready</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center font-semibold">⚡</div>
                <div>
                  <div className="text-sm font-medium">Fast</div>
                  <div className="text-xs text-gray-500">Tiny and optimized</div>
                </div>
              </div>
            </div>
          </div>

          {/* HERO ILLUSTRATION */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
              <div className="h-48 bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center text-indigo-600 font-semibold">
                Illustration
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-center text-gray-500">
                <div className="p-2 border rounded">Fast</div>
                <div className="p-2 border rounded">Accessible</div>
                <div className="p-2 border rounded">Responsive</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold">Features</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Handy building blocks you can copy into any project.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Components", body: "Reusable UI pieces." },
                { title: "Theming", body: "Easily customize with Tailwind config." },
                { title: "Accessibility", body: "Keyboard-friendly and semantic." },
                { title: "Performance", body: "Small bundle size and fast render." },
                { title: "Type-safe", body: "Written in TypeScript for safety." },
                { title: "Responsive", body: "Looks good on every screen." },
              ].map((f) => (
                <article key={f.title} className="p-6 border rounded-lg bg-gray-50 hover:shadow transition">
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Pricing */}
        <section id="pricing" className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-xl text-white">
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">Ready to launch?</h3>
                <p className="mt-1 text-sm opacity-90">Start your project with this template. No build-time surprises.</p>
              </div>

              <div className="mt-4 md:mt-0">
                <button className="px-5 py-2 rounded-md bg-white text-indigo-700 font-semibold hover:opacity-90">Get Started — it's free</button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer id="contact" className="mt-12 bg-white border-t">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-semibold">Demo UI</div>
              <div className="text-sm text-gray-500">© {new Date().getFullYear()} Demo Inc.</div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-indigo-600">Privacy</a>
              <a href="#" className="hover:text-indigo-600">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/*
Usage notes:
1. This file is a single-component demo. Place it in a React + TypeScript project and import it into App.tsx.
2. Ensure Tailwind is configured (tailwindcss v3+). For Vite: `npm create vite@latest my-app --template react-ts` then follow Tailwind install docs.
3. Copy any classes you like into your real components. Keep the hero/feature sections as examples.
*/
