import { ReactNode } from 'react'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import styles from './Hero.module.scss'
import { Technology, technologies } from '../../data/technologies'
import Img from 'next/image'

type props = {
  children: ReactNode
}

const Bold = ({ children }: props) => (
  <span className="font-bold">{children}</span>
)

const Link_ = ({ children, href }: props & { href: string }) => (
  <a className="clickable-effects no-hover-fx d-inh" href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)

const CoderLink = ({ children }: props) => (
  <Link_ href="https://www.coderhouse.com">{children}</Link_>
)

const SbLink = () => (
  <span className="inline-flex">
    <Link_ href="https://songbasket.com">
      <Icon src="/assets/icons/songbasket.png" alt="SongBasket" />
      <Bold>SongBasket</Bold>
    </Link_>
  </span>
)

const VindLink = () => (
  <span className="inline-flex">
    <Link_ href="https://vind-works.io">
      <Icon src="/assets/icons/vind.png" alt="Vind" />
      <Bold>Vind</Bold>
    </Link_>
  </span>
)

const AmortaLink = () => (
  <span className="inline-flex">
    <Link_ href="https://amorta.loan">
      <Icon src="/assets/icons/amorta.svg" alt="Amorta" />
      <Bold>Amorta</Bold>
    </Link_>
  </span>
)

const ConstitucionLink = ({ children }: props) => (
  <Link_ href="https://constitucion.ar">{children}</Link_>
)

const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <span className={`mx-2 ${styles.centerY}`}>
    <Img
      src={src}
      alt={alt}
      title={alt}
      width={16}
      height={16}
      unoptimized={src.endsWith('.svg')}
    />
  </span>
)

const Tech = (technology: Technology) => (
  <Link_ href={technology.website}>
    <Icon src={technology.icon} alt={technology.name} />
  </Link_>
)

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className="mx-auto pb-6 max-w-[80em]">
        <h1 className="mix-blend-hard-light">
          <span>Joaquin Esteban</span>
        </h1>
        <div className="font-bold text-xl mb-2">
          <span>
            <i>Joaco (/'xoa.ko/.)</i>
            <br />
            <i>I make Software. I build Systems.</i>
          </span>
        </div>

        <div className="text-xl">
          <span>
            Software Engineer from <Bold>Buenos Aires, Argentina</Bold>
            <br />
            <div>Currently working on:</div>
            <div className="flex flex-col">
              <div>
                <VindLink />, Map keys to on-screen elements and trigger clicks
                effortlessly
                <br />
              </div>
              <div>
                <AmortaLink />, Interactive French amortization calculator with
                shareable result URLs.
                <br />
              </div>
              <div>
                <SbLink />, The all in one solution to turn Spotify playlists
                into MP3
                <br />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="mx-auto pb-6 max-w-[80em]">
        <h2 className="!text-2xl font-medium">
          <span>Technologies</span>
        </h2>
        <div className="text-xl mb-5">
          That I've been working with, and I'm currently working with, that I
          like and I love.
        </div>
        <div className="flex flex-col text-xl gap-1">
          <div className="flex">
            <span className="mr-2">
              <Bold>Frontend</Bold>
            </span>
            <Tech {...technologies.Vue} />
            <Tech {...technologies.React} />
            <Tech {...technologies.Svelte} />
            <Tech {...technologies.Next} />
            <Tech {...technologies.Nuxt} />
            <Tech {...technologies.RxJS} />
          </div>

          <div className="flex">
            <span className="mr-2">
              <Bold>Systems</Bold>
            </span>
            <Tech {...technologies.GoLang} />
            <Tech {...technologies.Rust} />
            <Tech {...technologies.Elixir} />
            <Tech {...technologies.OCaml} />
            <Tech {...technologies.Node} />
            <Tech {...technologies.Nest} />
            <Tech {...technologies.PostgreSQL} />
            <Tech {...technologies.MongoDB} />
            <Tech {...technologies.DynamoDB} />
            <Tech {...technologies.Electron} />
            <Tech {...technologies.Tauri} />
          </div>
        </div>
      </div>
    </div>
  )
}
