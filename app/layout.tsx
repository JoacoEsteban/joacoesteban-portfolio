import { GoogleAnalytics } from '@next/third-parties/google'
import '../styles/globals.scss'
import '../styles/fonts/MADE Tommy/stylesheet.scss'
import { Providers } from './providers'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Joaquin Esteban - Software Engineer | Full-Stack Web Developer',
  description:
    'Software Engineer based in Torino, Italy. Currently working on Vind, Map keys to on-screen elements and trigger clicks effortlessly and SongBasket, The all in one solution to turn Spotify playlists into MP3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
      <GoogleAnalytics gaId={'G-Q3MX5BCNHT'} />
    </html>
  )
}
