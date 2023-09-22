export type Technology = {
  name: string,
  website: string,
  icon: string,
}

export const technologies: { [key: string]: Technology } = {
  "Vue": {
    name: "Vue.js",
    website: "https://vuejs.org",
    icon: "/assets/icons/vue.png",
  },
  "React": {
    name: "React.js",
    website: "https://react.dev/",
    icon: "/assets/icons/react.png",
  },
  "Svelte": {
    name: "Svelte.js",
    website: "https://svelte.dev/",
    icon: "/assets/icons/svelte.png",
  },
  "Next": {
    name: "Next.js",
    website: "https://nextjs.org/",
    icon: "/assets/icons/next.ico",
  },
  "Nuxt": {
    name: "Nuxt.js",
    website: "https://nuxt.com/",
    icon: "/assets/icons/nuxt.png",
  },
  "GoLang": {
    name: "GoLang",
    website: "https://go.dev/",
    icon: "/assets/icons/go.png",
  },
  "Rust": {
    name: "Rust",
    website: "https://www.rust-lang.org/",
    icon: "/assets/icons/ferris.png",
  },
  "Node": {
    name: "Node.js",
    website: "https://nodejs.org/en",
    icon: "/assets/icons/nodejs.png",
  },
  "Nest": {
    name: "Nest.js",
    website: "https://nestjs.com/",
    icon: "/assets/icons/nestjs.ico",
  },
  "PostgreSQL": {
    name: "PostgreSQL",
    website: "https://www.postgresql.org/",
    icon: "/assets/icons/postgres.ico",
  },
  "MongoDB": {
    name: "MongoDB",
    website: "https://www.mongodb.com/",
    icon: "/assets/icons/mongo.ico",
  },
  "Electron": {
    name: "Electron.js",
    website: "https://www.electronjs.org/",
    icon: "/assets/icons/electron.ico",
  },
  "Tauri": {
    name: "Tauri",
    website: "https://tauri.app/",
    icon: "/assets/icons/tauri.png",
  }
}
