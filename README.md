# Cyberpunk DevOps Portfolio

A high-fidelity, visually stunning cyberpunk-themed portfolio for Mridul Roy, specializing in DevOps, Kubernetes, and Cloud Infrastructures.

This portfolio is built with the latest **Next.js** framework and features fully custom **Vanilla CSS** designs including neon glows, CRT scanlines, and animated text glitches.

## Features

- 👾 **Pure Cyberpunk Aesthetic:** Dark slate backgrounds mixed with neon cyan, magenta, and yellow.
- 📺 **Retro-Hacker Terminal:** Boot sequence simulation that slowly prints out active DevOps modules.
- ⚡ **Dynamic Routing:** Individual project pages statically generated to show architectural details and feature scopes.
- 📱 **Fully Responsive:** Fluid layouts designed with CSS modules to provide an excellent experience on any screen size.
- 🚀 **Next.js App Router:** Powered by Next.js ensuring optimal performance via zero-hydration Server Components where possible.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Directory)
- **Language:** TypeScript
- **Styling:** Vanilla CSS Modules / Custom CSS Variables
- **Fonts:** Share Tech Mono, Inter (via next/font/google)

## Getting Started

### Prerequisites
Make sure you have Node.js (Version 18+) installed.

### Installation

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Run the development server locally:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the outcome.

## Deployment

To create an optimized production build, run:
```bash
npm run build
```
Then start the application with `npm start` or easily deploy it on [Vercel](https://vercel.com/new).

## Structure
- `/src/app` - Contains the main index and dynamic routing (`/project/[id]`).
- `/src/components` - React components (`Hero`, `TerminalSkills`, `ProjectsMatrix`).
- `/src/data` - Centralized mock JSON representation of data endpoints.
