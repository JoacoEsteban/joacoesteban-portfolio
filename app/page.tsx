import { Box, Button, Container, Flex } from '@chakra-ui/react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Background from '../components/Background/Background'

export default function Index () {
  return (
    <Container>
      <Flex flexDirection="column" height="100vh" position="relative">
        <title>
          Joaco Esteban - Software Engineer | Full-Stack Web Developer
        </title>

        <Background></Background>
        <Header></Header>
        <Box m="auto">
          <Hero></Hero>
        </Box>
      </Flex>
    </Container>
  )
}
