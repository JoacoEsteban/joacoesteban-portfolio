import type { Post } from '@/lib/blog'
import BlogCard from './BlogCard'
import styles from './BlogList.module.scss'

type Props = {
  posts: Post[]
}

export default function BlogList({ posts }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Writing</p>
        <h1 className={styles.heading}>Blog</h1>
        <p className={styles.sub}>
          Notes on building software — systems design, browser internals, product thinking, and the craft of engineering.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <p>No posts yet. Check back soon.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
