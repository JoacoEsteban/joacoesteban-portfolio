import Link from 'next/link'
import styles from './BlogNav.module.scss'

type Props = {
  postTitle?: string
}

export default function BlogNav({ postTitle }: Props) {
  return (
    <nav className={styles.nav}>
      <Link href="/blog" className={`clickable-effects no-hover-fx ${styles.back}`}>
        <span className={styles.arrow}>←</span>
        <span>All posts</span>
      </Link>
      {postTitle && (
        <>
          <span className={styles.sep}>/</span>
          <span className={styles.current}>{postTitle}</span>
        </>
      )}
    </nav>
  )
}
