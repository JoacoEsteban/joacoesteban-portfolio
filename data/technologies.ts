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
  },
  "DynamoDB": {
    name: "DynamoDB",
    website: "https://aws.amazon.com/dynamodb/",
    icon: "/assets/icons/dynamodb.png",
  },
  "Elixir": {
    name: "Elixir",
    website: "https://elixir-lang.org/",
    icon: "/assets/icons/elixir.png",
  },
  "OCaml": {
    name: "OCaml",
    website: "https://ocaml.org/",
    icon: "/assets/icons/ocaml.ico",
  },
  "RxJS": {
    name: "RxJS",
    website: "https://rxjs.dev/",
    icon: "/assets/icons/rxjs.png",
  },
  "Sass": {
    name: "Sass",
    website: "https://sass-lang.com/",
    icon: "/assets/icons/sass.ico",
  },
  "CSS": {
    name: "CSS",
    website: "https://www.w3.org/Style/CSS/",
    icon: "todo" // "/assets/icons/css.ico",
  },
  "HTML": {
    name: "HTML",
    website: "https://www.w3.org/html/",
    icon: "todo" // "/assets/icons/html.ico",
  },
  "JavaScript": {
    name: "JavaScript",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "todo" // "/assets/icons/javascript.ico",
  },
  "TypeScript": {
    name: "TypeScript",
    website: "https://www.typescriptlang.org/",
    icon: "todo" // "/assets/icons/typescript.ico",
  },
}
