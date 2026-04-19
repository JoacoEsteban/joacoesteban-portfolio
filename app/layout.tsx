import { GoogleAnalytics } from '@next/third-parties/google'
import '../styles/tailwind.css'
import '../styles/globals.scss'
import '../styles/fonts/MADE Tommy/stylesheet.scss'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import { Analytics } from '@vercel/analytics/next'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://joaco.io'),
  title: {
    template: '%s | Joaco Esteban',
    default: 'Joaquin Esteban - Software Engineer | Full-Stack Web Developer',
  },
  description:
    'Software Engineer based in Buenos Aires. Currently working on Vind, Map keys to on-screen elements and trigger clicks effortlessly and SongBasket, The all in one solution to turn Spotify playlists into MP3',
  openGraph: {
    siteName: 'Joaco Esteban',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8407180754020844" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId={'G-Q3MX5BCNHT'} />
    </html>
  )
}
