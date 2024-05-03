import { Box, Container, Heading, Text, Link, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/500.css"
import styles from './Hero.module.scss'
import { Technology, technologies } from '../../data/technologies'
import Img from 'next/image'

type props = {
  children: ReactNode
}


const Bold = ({ children }: props) => <Text fontWeight={700} display="inline">{children}</Text>
const Link_ = ({ children, href }: props & { href: string }) => <Link className="clickable-effects no-hover-fx d-inh" href={href} target="_blank">{children}</Link>
const CoderLink = ({ children }: props) => <Link_ href="https://www.coderhouse.com">{children}</Link_>
const SbLink = () =>
  <Box display={'inline-flex'}>
    <Link_ href="https://songbasket.com">
      <Icon src='/assets/icons/songbasket.png' alt='SongBasket' /><Bold>SongBasket</Bold>
    </Link_>
  </Box>
const VindLink = () =>
  <Box display={'inline-flex'}>
    <Link_ href="https://github.com/joacoesteban/vind">
      <Icon src='/assets/icons/vind.png' alt='Vind' /><Bold>Vind</Bold>
    </Link_>
  </Box>
const ConstitucionLink = ({ children }: props) => <Link_ href="https://constitucion.ar">{children}</Link_>
const Icon = ({ src, alt }: { src: string, alt: string }) => (
  <Box marginLeft={2} marginRight={2} className={styles.centerY}>
    <Img src={src} alt={alt} title={alt} width={16} height={16} />
  </Box>
)
const Tech = (technology: Technology) => (
  <Link_ href={technology.website}>
    <Icon src={technology.icon} alt={technology.name} />
  </Link_>
)


export default function Hero () {
  return (
    <div className={styles.heroContainer}>
      <Container margin="auto" paddingBottom={6}>
        <Heading as={'h1'}>
          <span>
            Joaquin Esteban
          </span>
        </Heading>
        <Box fontWeight={'bold'} fontSize={'xl'} marginBottom={2}>
          <span>
            <i>Joaco (/'xoa.ko/.)</i>
          </span>
        </Box>

        <Box fontWeight={'regular'} fontSize={'xl'}>
          <span>
            Software Engineer based in <Bold>Torino, Italia</Bold> <br />
            Full-Time Developer at <CoderLink><Bold>Coderhouse</Bold></CoderLink> <br />
            Hosting <ConstitucionLink><Bold>Constitucion.ar</Bold></ConstitucionLink><br />
            <br />
            <Box>
              Currently dropping free time on:
            </Box>
            <Flex flexDirection={'column'}>
              <div >
                <SbLink />, The all in one solution to turn Spotify playlists into MP3<br />
              </div>
              <div >
                <VindLink />, Map keys to on-screen elements and trigger clicks effortlessly<br />
              </div>
            </Flex>
          </span>
        </Box>
      </Container>
      <Container margin="auto" paddingBottom={6}>
        <Heading as={'h2'} size={'lg'} fontWeight={'medium'}>
          <span>
            Technologies
          </span>
        </Heading>
        <Box fontWeight={'regular'} fontSize={'xl'} marginBottom={5}>
          That I've been working with, and I'm currently working with, that I like and I love.
        </Box>
        <Box fontWeight={'regular'} fontSize={'xl'}>
          <Flex>
            <Box marginRight={2}>
              <Bold>Frontend</Bold>
            </Box>
            <Tech {...technologies.Vue} />
            <Tech {...technologies.React} />
            <Tech {...technologies.Svelte} />
            <Tech {...technologies.Next} />
            <Tech {...technologies.Nuxt} />
          </Flex>

          <Flex>
            <Box marginRight={2}>
              <Bold>Backend</Bold>
            </Box>
            <Tech {...technologies.GoLang} />
            <Tech {...technologies.Rust} />
            <Tech {...technologies.Elixir} />
            <Tech {...technologies.OCaml} />
            <Tech {...technologies.Node} />
            <Tech {...technologies.Nest} />
            <Tech {...technologies.PostgreSQL} />
            <Tech {...technologies.MongoDB} />
            <Tech {...technologies.DynamoDB} />
          </Flex>

          <Flex>
            <Box marginRight={2}>
              <Bold>Desktop</Bold>
            </Box>
            <Tech {...technologies.Electron} />
            <Tech {...technologies.Tauri} />
          </Flex>

        </Box>
      </Container>
    </div>
  )
}
