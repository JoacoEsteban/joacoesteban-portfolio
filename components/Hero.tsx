import { Box, Container, Heading, Text } from '@chakra-ui/react'

const Bold = ({ children }) => <Text fontWeight={410} display="inline">{children}</Text>

export default function Hero () {
  return (
    <div>
      <Container margin="auto">
        <Heading as={'h1'} size={'3xl'} fontWeight={'medium'} marginBottom={5}>
          <Text>
            Joaquin Esteban
          </Text>
        </Heading>
        <Box fontWeight={'regular'} fontSize={'xl'}>
          <Text>
            Full Stack Web Developer based on <Bold>Buenos Aires, Argentina</Bold> <br />
            Full-Time Developer at <Bold>CoderHouse</Bold> <br />
            Currently working on <Bold>SongBasket</Bold>, The all in one solution to turn Spotify playlists into MP3 <br />
          </Text>
        </Box>
      </Container>
    </div>
  )
}
