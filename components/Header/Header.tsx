import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import styles from './Header.module.scss'

const buttons = [
  {
    key: 'email',
    icon: FaEnvelope,
    href: 'mailto:dev@joacoesteban.com'
  },
  {
    key: 'github',
    icon: FaGithub,
    href: 'http://github.joacoesteban.com'
  },
  {
    key: 'whatsapp',
    icon: FaWhatsapp,
    href: 'https://wa.me/393280739643'
  },
  {
    key: 'linkedin',
    icon: FaLinkedin,
    href: 'http://linkedin.joacoesteban.com'
  },
]

export default function Hero () {
  return (
    <div className={styles.headerContainer}>
      <Flex justify={'end'}>
        {buttons.map((itm, i) => (
          <a href={itm.href} key={i} target="_blank" rel="noreferrer" className={`clickable-effects no-hover-fx ${styles.fab}`}>
            <itm.icon></itm.icon>
          </a>
        ))}
      </Flex>
    </div>
  )
}
