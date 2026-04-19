import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  coverImage?: string
  draft?: boolean
  content: string
  readingTime: number
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

function computeReadingTime(content: string): number {
  const codeBlocks = content.match(/```[\s\S]*?```/g) ?? []
  const codeWordCount = codeBlocks.join(' ').split(/\s+/).filter(Boolean).length

  const prose = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[.*?\]\(.*?\)/g, '')
    .replace(/[#*_~>|]/g, '')
    .trim()

  const proseWordCount = prose.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(proseWordCount / 200 + codeWordCount / 70))
}

function parsePost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    description: data.description ?? '',
    tags: data.tags ?? [],
    coverImage: data.coverImage,
    draft: data.draft ?? false,
    content,
    readingTime: computeReadingTime(content),
  }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const posts = files
    .map((f) => parsePost(f.replace(/\.md$/, '')))
    .filter((p): p is Post => p !== null)
    .filter((p) => process.env.NODE_ENV === 'production' ? !p.draft : true)

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  return parsePost(slug)
}
