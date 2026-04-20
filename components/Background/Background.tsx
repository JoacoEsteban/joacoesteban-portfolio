'use client'

import Spline from "@splinetool/react-spline"
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
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

  const getTitlesAmount = useCallback((): number => {
    const el = firstTitleRef.current
    if (el) {
      const value = Math.ceil(window.innerHeight / ((el as HTMLElement).clientHeight || 0)) - 1
      return value
    }
    return 0
  }, [])

  const calculateTitles = useCallback(() => {
    const value = getTitlesAmount()
    if (titlesAmount !== value)
      setTitlesAmount(getTitlesAmount())
  }, [titlesAmount, getTitlesAmount])

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!mounted) return
    calculateTitles()
    window.addEventListener('resize', calculateTitles)
    return () => window.removeEventListener('resize', calculateTitles)
  }, [mounted, calculateTitles])

  const FwTitle = forwardRef(() => <div ref={firstTitleRef}><Title /></div>)
  FwTitle.displayName = 'FwTitle'

  return (
    <div className={styles.background}>
      {mounted && (
        <>
          <div className={[, styles.illustrationsContainer].join(' ')}>
            <div className={styles.content}>
              <Spline
                scene="https://prod.spline.design/LOcaID1thP-buwcC/scene.splinecode"
                onLoad={(app) => (app as any)._renderer?.setPixelRatio(0.2)}
              />
            </div>
          </div>
          <div className={[, styles.overlay].join(' ')}>
            <div className={styles.titlesContainer}>
              <div
                className="max-w-[80em] mx-auto"
                style={{ '--_titles-amount': titlesAmount || 0 } as React.CSSProperties}
              >
                <FwTitle />
                {[...Array(titlesAmount || 0)].map((itm, i) => <Title key={i} index={i + 1} />)}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
