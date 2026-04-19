import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogList from '@/components/Blog/BlogList'
import Background from '@/components/Background/Background'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes on building software — systems design, browser internals, product thinking, and the craft of engineering.',
  openGraph: {
    title: 'Blog | Joaco Esteban',
    description:
      'Notes on building software — systems design, browser internals, product thinking, and the craft of engineering.',
    type: 'website',
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-[80em] mx-auto">
      <Background />
      <BlogList posts={posts} />
    </div>
  )
}
