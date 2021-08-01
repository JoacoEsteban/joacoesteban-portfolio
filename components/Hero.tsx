import { Box, Container, Heading, Text, Link } from '@chakra-ui/react'
import { ReactNode } from 'react'

type props = {
  children: ReactNode
}

const Bold = ({ children }: props) => <Text fontWeight={410} display="inline">{children}</Text>
const Link_ = ({ children, href }: props & { href: string }) => <Link className="clickable-effects no-hover-fx" href={href} target="_blank" rel="noreferrer">{children}</Link>
const CoderLink = ({ children }: props) => <Link_ href="https://www.coderhouse.com">{children}</Link_>
const SbLink = ({ children }: props) => <Link_ href="https://songbasket.com">{children}</Link_>

export default function Hero () {
  return (
    <div>
      <Container margin="auto" paddingBottom="6">
        <Heading as={'h1'} size={'3xl'} fontWeight={'medium'} marginBottom={5}>
          <Text>
            Joaquin Esteban
          </Text>
        </Heading>
        <Box fontWeight={'regular'} fontSize={'xl'}>
          <Text>
            Full Stack Web Developer based on <Bold>Buenos Aires, Argentina</Bold> <br />
            Full-Time Developer at <CoderLink><Bold>CoderHouse</Bold></CoderLink> <br />
            Currently working on <SbLink><Bold>SongBasket</Bold>, The all in one solution to turn Spotify playlists into MP3 </SbLink><br />
          </Text>
        </Box>
      </Container>
    </div>
  )
}
