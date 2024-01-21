'use client'

import Spline from "@splinetool/react-spline"
import Script from 'next/script'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React, { Component, forwardRef, Fragment, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'
import styles from './Background.module.scss'
import Illustrations from './Illustrations'



const Title = ({ index }: { index?: number }) => (
  <div className={styles.backgroundTitle} style={{ '--_index': index || 0 } as React.CSSProperties}>Full Stack Developer</div>
)

export default function Background () {
  const firstTitleRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [titlesAmount, setTitlesAmount] = useState(0)

  useEffect(() => {
    console.log('mounted???')
    setMounted(true)
    calculateTitles()
    window.addEventListener('resize', calculateTitles)
    return () => window.removeEventListener('resize', calculateTitles)
  }, [])

  console.log(firstTitleRef)

  function getTitlesAmount (): number {
    const el = firstTitleRef.current
    console.log(el)
    if (el) {
      const value = Math.ceil(window.innerHeight / ((el as HTMLElement).clientHeight || 0)) - 1
      console.log(value)
      console.log(el, value)
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
    <div>
      <div className={[styles.background, styles.illustrationsContainer].join(' ')}>
        {/* <Illustrations></Illustrations> */}
        <div className={styles.content}>
          <Spline scene="https://prod.spline.design/Y-d9TpnoP8NhUpbT/scene.splinecode" />
        </div>
      </div>
      <div className={[styles.background, styles.overlay].join(' ')}>
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
