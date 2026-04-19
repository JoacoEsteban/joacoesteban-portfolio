'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from './CodeBlock.module.scss'

type Props = {
  language?: string
  children: string
}

const customStyle = {
  margin: 0,
  borderRadius: 0,
  background: '#0d1117',
  fontSize: '0.82rem',
  lineHeight: '1.7',
}

export default function CodeBlock({ language, children }: Props) {
  return (
    <div className={styles.wrapper}>
      {language && <span className={styles.lang}>{language}</span>}
      <SyntaxHighlighter
        language={language ?? 'text'}
        style={oneDark}
        customStyle={customStyle}
        PreTag="div"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
