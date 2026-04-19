import Link from 'next/link'
import type { Post } from '@/lib/blog'
import styles from './BlogCard.module.scss'

type Props = {
  post: Post
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className={`clickable-effects soft-fx ${styles.card}`}>
      <div className={styles.inner}>
        <div className={styles.tags}>
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.description}>{post.description}</p>

        <div className={styles.footer}>
          <time dateTime={post.date} className={styles.date}>
            {formatDate(post.date)}
          </time>
          <span className={styles.reading}>{post.readingTime} min read</span>
        </div>
      </div>

      <div className={styles.arrow}>↗</div>
    </Link>
  )
}
