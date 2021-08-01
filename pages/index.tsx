import { Box, Button, Container, Flex } from '@chakra-ui/react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Background from '../components/Background/Background'

export default function Home () {
  return (
    <Container>

      <Flex flexDirection="column" height="100vh">
        <title>
          Joaco Esteban - Full-Stack Web Developer
        </title>

        <Background></Background>
        <Header></Header>
        <Box margin="auto">
          <Hero></Hero>
        </Box>
      </Flex>
    </Container>
  )
}
