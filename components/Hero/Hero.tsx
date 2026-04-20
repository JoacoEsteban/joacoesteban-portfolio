'use client'
import { useEffect, useState } from 'react'
import styles from './Hero.module.scss'
import { Technology, technologies } from '../../data/technologies'
import Img from 'next/image'

const TechIcon = (t: Technology) => (
  <a
    className={styles.techIcon}
    href={t.website}
    target="_blank"
    rel="noreferrer"
    title={t.name}
    aria-label={t.name}
  >
    <Img
      src={t.icon}
      alt={t.name}
      width={16}
      height={16}
      unoptimized={t.icon.endsWith('.svg')}
    />
  </a>
)

type TechGroupProps = { label: string; items: Technology[] }
const TechGroup = ({ label, items }: TechGroupProps) => (
  <div className={styles.techGroup}>
    <span className={styles.techLabel}>{label}</span>
    {items.map(t => <TechIcon key={t.name} {...t} />)}
  </div>
)

type ProjectProps = { href: string; icon: string; name: string; desc: string; iconUnoptimized?: boolean }
const ProjectItem = ({ href, icon, name, desc, iconUnoptimized }: ProjectProps) => (
  <a className={styles.projectItem} href={href} target="_blank" rel="noreferrer">
    <span className={styles.projectIconWrap}>
      <Img src={icon} alt={name} width={14} height={14} unoptimized={iconUnoptimized} />
    </span>
    <span className={styles.projectName}>{name}</span>
    <span className={styles.projectSep}>—</span>
    <span className={styles.projectDesc}>{desc}</span>
  </a>
)

export default function Hero() {
  const t = technologies
  const [animate, setAnimate] = useState(false)
  useEffect(() => { setAnimate(true) }, [])

  return (
    <div className={`${styles.heroContainer} ${animate ? styles.animate : ''}`}>
      <div className={styles.heroMain}>

        <div className={styles.heroLeft}>
          <h1 className={styles.name}>
            <span className={styles.nameLine}>Joaquin</span>
            <span className={styles.nameLine}>Esteban</span>
          </h1>
          <p className={styles.phonetic}>Joaco · /ˈxoa.ko/</p>
        </div>

        <div className={styles.heroRight}>
          <p className={styles.tagline}>I make Software.<br />I build Systems.</p>
          <p className={styles.location}>Buenos Aires, Argentina</p>
          <div className={styles.projectList}>
            <ProjectItem
              href="https://vind-works.io"
              icon="/assets/icons/vind.png"
              name="Vind"
              desc="Map keys to on-screen elements"
            />
            <ProjectItem
              href="https://amorta.loan"
              icon="/assets/icons/amorta.svg"
              name="Amorta"
              desc="French amortization calculator"
              iconUnoptimized
            />
            <ProjectItem
              href="https://songbasket.com"
              icon="/assets/icons/songbasket.png"
              name="SongBasket"
              desc="Spotify playlists → MP3"
            />
          </div>
        </div>

      </div>

      <div className={styles.techRow}>
        <TechGroup label="Frontend" items={[t.Vue, t.React, t.Svelte, t.Next, t.Nuxt, t.RxJS]} />
        <span className={styles.techDivider} aria-hidden />
        <TechGroup label="Systems" items={[t.GoLang, t.Rust, t.Elixir, t.OCaml, t.Node, t.Nest, t.PostgreSQL, t.MongoDB, t.DynamoDB, t.Electron, t.Tauri]} />
      </div>
    </div>
  )
}
