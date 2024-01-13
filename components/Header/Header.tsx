import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import FA from 'react-fontawesome'
import styles from './Header.module.scss'

const buttons = [
  {
    key: 'email',
    icon: 'envelope',
    href: 'mailto:dev@joacoesteban.com'
  },
  {
    key: 'github',
    icon: 'github',
    href: 'http://github.joacoesteban.com'
  },
  {
    key: 'whatsapp',
    icon: 'whatsapp',
    href: 'https://wa.me/393280739643'
  },
  {
    key: 'linkedin',
    icon: 'linkedin',
    href: 'http://linkedin.joacoesteban.com'
  },
]

export default function Hero () {
  return (
    <div>
      <Flex justify={'end'} paddingTop="5" paddingRight="5">
        {buttons.map((itm, i) => (
          <a href={itm.href} key={i} target="_blank" rel="noreferrer" className={`clickable-effects no-hover-fx ${styles.fab}`}>
            <FA className={styles.fa} name={itm.icon}></FA>
          </a>
        ))}
      </Flex>
    </div>
  )
}
