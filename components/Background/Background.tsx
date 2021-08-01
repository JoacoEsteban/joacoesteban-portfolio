import { Box, Container, Heading, Text } from '@chakra-ui/react'
import styles from './Background.module.scss'

export default function Hero () {
  return (
    <div className={styles.background}>
      <div className={styles.titlesContainer}>
        <Container>
          {
            [...Array(11)].map((e, i) =>
              <div key={i} className={styles.backgroundTitle}>
                Full Stack Developer
              </div>
            )
          }
        </Container>
      </div>
    </div>
  )
}
