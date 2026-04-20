'use client'
import { useEffect, useState } from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaBriefcase,
  FaPen
} from 'react-icons/fa'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function UpworkIcon() {
  return <Image width={16} height={16} src="/logos/upwork.svg" alt="Upwork" />
}

const navItems = [
  { key: 'email', label: 'Email', icon: FaEnvelope, href: 'mailto:dev@joaco.io', external: true },
  { key: 'github', label: 'GitHub', icon: FaGithub, href: '/links/github' },
  { key: 'whatsapp', label: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/541123869287', external: true },
  { key: 'linkedin', label: 'LinkedIn', icon: FaLinkedin, href: '/links/linkedin' },
  { key: 'upwork', label: 'Upwork', icon: UpworkIcon, href: '/links/upwork' },
  { key: 'cv', label: 'CV', icon: FaBriefcase, href: '/links/cv' },
  { key: 'blog', label: 'Blog', icon: FaPen, href: '/blog' },
]

export default function Header() {
  const [animate, setAnimate] = useState(false)
  useEffect(() => { setAnimate(true) }, [])

  return (
    <header className={styles.header}>
      <nav className={`${styles.pill} ${animate ? styles.animate : ''}`}>
        {navItems.map((item, i) => {
          const Icon = item.icon
          return (
            <Link
              key={item.key}
              href={item.href}
              className={styles.item}
              style={{ '--i': i } as React.CSSProperties}
              {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className={styles.iconWrap}><Icon /></span>
              <span className={styles.label}>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
