import { Box, Container, Heading, Text } from '@chakra-ui/react'
import styles from './Background.module.scss'
import Illustrations from './Illustrations'

export default function Hero () {
  return (
    <div>
      <div className={[styles.background, styles.illustrationsContainer].join(' ')}>
        <Illustrations></Illustrations>
      </div>
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
    </div>
  )
}
