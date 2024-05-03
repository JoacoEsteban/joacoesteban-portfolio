import '../styles/globals.scss'
import '../styles/fonts/MADE Tommy/stylesheet.scss'
import { Providers } from './providers'
import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/500.css"

export const metadata = {
  title: 'Joaquin Esteban - Software Engineer | Full-Stack Web Developer',
  description: 'Software Engineer based in Torino, Italy. Full-Time Developer at Coderhouse. Hosting Constitucion.ar. Currently dropping free time on SongBasket, The all in one solution to turn Spotify playlists into MP3 and Vind, Map keys to on-screen elements and trigger clicks effortlessly.',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
