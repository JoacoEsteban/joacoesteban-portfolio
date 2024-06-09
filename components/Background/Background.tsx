'use client'

import Spline from "@splinetool/react-spline"
import { Container } from '@chakra-ui/react'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from './Background.module.scss'
import { technologies } from '../../data/technologies'
import { shuffle } from '../../utils/shuffle'

function titleText () {
  return shuffle(Object.keys(technologies)).join(' ')
}
const Title = ({ index }: { index?: number }) => (
  <div className={styles.backgroundTitle} style={{ '--_index': index || 0 } as React.CSSProperties}>
    {titleText()}
  </div>
)

export default function Background () {
  const firstTitleRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [titlesAmount, setTitlesAmount] = useState(0)

  useEffect(() => {
    setMounted(true)
    calculateTitles()
    window.addEventListener('resize', calculateTitles)
    return () => window.removeEventListener('resize', calculateTitles)
  }, [])

  function getTitlesAmount (): number {
    const el = firstTitleRef.current
    if (el) {
      const value = Math.ceil(window.innerHeight / ((el as HTMLElement).clientHeight || 0)) - 1
      return value
    }
    return 0
  }

  function calculateTitles () {
    const value = getTitlesAmount()
    if (titlesAmount !== value)
      setTitlesAmount(getTitlesAmount())
  }


  const FwTitle = forwardRef(() => <div ref={firstTitleRef}><Title /></div>)
  FwTitle.displayName = 'FwTitle'

  return (
    // eslint-disable-next-line react/display-name
    <div className={styles.background}>
      <div className={[, styles.illustrationsContainer].join(' ')}>
        <div className={styles.content}>
          <Spline scene="https://prod.spline.design/Y-d9TpnoP8NhUpbT/scene.splinecode" />
        </div>
      </div>
      <div className={[, styles.overlay].join(' ')}>
        <div className={styles.titlesContainer}>
          <Container style={{ '--_titles-amount': titlesAmount || 0 } as React.CSSProperties}>
            <FwTitle />
            {
              mounted && [...Array(titlesAmount || 0)].map((itm, i) => <Title key={i} index={i + 1} />)
            }
          </Container>
        </div>
      </div>
    </div>
  )
}
