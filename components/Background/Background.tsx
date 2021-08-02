import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React, { Component, forwardRef, Fragment, MutableRefObject, RefObject, useRef } from 'react'
import styles from './Background.module.scss'
import Illustrations from './Illustrations'



const Title = ({ index }: { index?: number }) => (
  <div className={styles.backgroundTitle} style={{ '--_index': index || 0 } as React.CSSProperties}>Full Stack Developer</div>
)

export default class Background extends Component {
  private firstTitleRef: MutableRefObject<null>
  private state: { mounted: boolean, titlesAmount: number }

  constructor(props: {}) {
    super(props)
    this.firstTitleRef = React.createRef()
    this.state = {
      mounted: false,
      titlesAmount: 0
    }
    console.log(this.firstTitleRef)
  }

  getTitlesAmount (): number {
    const value = Math.ceil(window.innerHeight / this.firstTitleRef.current.clientHeight) - 1
    console.log(value)
    return value
  }

  calculateTitles () {
    const value = this.getTitlesAmount()
    if (this.state.titlesAmount !== value)
      this.setState({ titlesAmount: this.getTitlesAmount() })
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.calculateTitles.bind(this))
  }

  componentDidMount () {
    this.setState({ mounted: true })
    this.calculateTitles()
    window.addEventListener('resize', this.calculateTitles.bind(this))
  }

  render () {
    // eslint-disable-next-line react/display-name
    const FwTitle = forwardRef(() => <div ref={this.firstTitleRef}><Title /></div>)
    return (
      <div>
        <div className={[styles.background, styles.illustrationsContainer].join(' ')}>
          <Illustrations></Illustrations>
        </div>
        <div className={styles.background}>
          <div className={styles.titlesContainer}>
            <Container>
              <FwTitle ref={this.firstTitleRef} />
              {
                this.state.mounted && [...Array(this.state.titlesAmount || 0)].map((itm, i) => <Title key={i} index={i + 1} />)
              }
            </Container>
          </div>
        </div>
      </div>
    )
  }
}
