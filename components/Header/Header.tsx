import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaWhatsapp, FaLinkedin, FaBriefcase } from 'react-icons/fa'
import styles from './Header.module.scss'
import Image from 'next/image'

const buttons = [
  {
    key: 'email',
    icon: FaEnvelope,
    href: 'mailto:dev@joacoesteban.com'
  },
  {
    key: 'github',
    icon: FaGithub,
    href: '/links/github'
  },
  {
    key: 'whatsapp',
    icon: FaWhatsapp,
    href: 'https://wa.me/393280739643'
  },
  {
    key: 'linkedin',
    icon: FaLinkedin,
    href: '/links/linkedin'
  },
  {
    key: 'upwork',
    icon: () => (
      <Image width={32} height={32} src="/logos/upwork.svg" alt="upwork logo" />
    ),
    href: '/links/upwork'
  },
  {
    key: 'cv',
    icon: FaBriefcase,
    href: '/links/cv'
  },
]

export default function Header () {
  return (
    <div className={styles.headerContainer}>
      <Flex justify={'end'}>
        {buttons.map((itm, i) => (
          <a href={itm.href} key={i} target="_blank" rel="noreferrer" className={`clickable-effects no-hover-fx ${styles.fab}`} title={itm.key}>
            <itm.icon></itm.icon>
          </a>
        ))}
      </Flex>
    </div>
  )
}
