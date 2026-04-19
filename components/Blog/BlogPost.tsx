import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import type { Post } from '@/lib/blog'
import CodeBlock from './CodeBlock'
import styles from './BlogPost.module.scss'

type Props = {
  post: Post
}

const components: Components = {
  code(props) {
    const { className, children } = props
    const language = className?.replace('language-', '')
    const isBlock = !!language

    if (isBlock) {
      return (
        <CodeBlock language={language}>
          {String(children).replace(/\n$/, '')}
        </CodeBlock>
      )
    }

    return <code className={styles.inlineCode}>{children}</code>
  },
  pre({ children }) {
    return <>{children}</>
  },
  h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
  h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
  h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
  a: ({ href, children }) => (
    <a href={href ?? '#'} target="_blank" rel="noopener noreferrer" className={styles.link}>
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? ''} className={styles.img} />
  ),
  blockquote: ({ children }) => (
    <blockquote className={styles.blockquote}>{children}</blockquote>
  ),
  hr: () => <hr className={styles.divider} />,
  ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
  ol: ({ children }) => <ol className={styles.listOrdered}>{children}</ol>,
  p: ({ children }) => <p className={styles.para}>{children}</p>,
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function BlogPost({ post }: Props) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.tagRow}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.meta}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className={styles.dot} />
          <span>{post.readingTime} min read</span>
        </div>
      </header>

      <div className={styles.body}>
        <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
