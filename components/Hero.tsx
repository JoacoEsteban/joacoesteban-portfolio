import { Box, Container, Heading, Text } from '@chakra-ui/react'

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
            Full Stack Web Developer based on <b>Buenos Aires, Argentina</b> <br />
            Full-Time Developer at <b>CoderHouse</b> <br />
            Currently working on <b>SongBasket</b>, The all in one solution to turn Spotify playlists into MP3 <br />
          </Text>
        </Box>
      </Container>
    </div>
  )
}
