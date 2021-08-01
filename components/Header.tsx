import { Box, Flex, Heading, Text } from '@chakra-ui/react'
// import { Button, Flex } from '@chakra-ui/react'

export default function Hero () {
  return (
    <div>
      <Flex justify={'end'}>
        <Box>
          Email
        </Box>
        <Box>
          Github
        </Box>
        <Box>
          Wapp
        </Box>
        <Box>
          Linkedin
        </Box>
      </Flex>
    </div>
  )
}
