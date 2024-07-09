import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
  const { pathname } = request.nextUrl
  let redirection: URL | null = null

  try {
    redirection = redirectionByPath(request)

    if (!redirection) {
      return NextResponse.next()
    }

  } catch (error) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 })
  }

  return NextResponse.redirect(redirection.href, {
    status: 302,
    headers: {
      'cache-control': 's-maxage=3600, stale-while-revalidate'
    }
  })
}

function redirectionByPath (request: NextRequest): URL | null {
  const { pathname } = request.nextUrl
  const parts = pathname.split('/').filter(Boolean)
  parts.shift()

  const [top, sub] = parts

  if (!top) {
    return null
  }

  return getRedirection(top, sub)
}

function getRedirection (top: string, sub?: string): URL | null {
  const match = list.find((item) => item.keys.some((key) => key === top))

  if (!match) {
    throw new Error('Top not found')
  }

  if (!sub) {
    return new URL(match.url)
  }

  const subMatch = match.subs?.find((item) => item.keys.some((key) => key === sub)) || null

  if (subMatch) {
    return new URL(subMatch.url)
  }

  throw new Error('Sub not found')
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/links/:path*', '/'],
}

const makeHref = (url: string) => url.search(/https?:\/\//) === 0 ? url : 'https://' + url

const list = [
  {
    keys: ['spotify', 'spoti', '@root', 'www'],
    url: makeHref('open.spotify.com/user/joaqo.esteban'),
    subs: [
      { keys: ['shift'], url: makeHref('open.spotify.com/playlist/23SiVma494pXAZyDbciyAL?si=DQMu3w0bSsi9SYG4Yq_lmw') },
      { keys: ['nero'], url: makeHref('open.spotify.com/playlist/72iIJ1KseSlAwg1gKteLgc?si=xdwhOhXEQiSF7na0mEKJTQ') },
      { keys: ['anth'], url: makeHref('open.spotify.com/playlist/3uXCwjBGNygcDxPSuPV1Vs?si=PsKQtBiIQ-mu4JBZGhbMGA') },
      { keys: ['lucy'], url: makeHref('open.spotify.com/playlist/6iGjy8O5kinmEiB9ezyrSd?si=3KVKuSghS-mfLVWo5Vco4g') },
      { keys: ['rift'], url: makeHref('open.spotify.com/playlist/0zXkndscNvMwMqLYElOoZa?si=Z1eCBQfYQpKOALzNF_V6Mg') },
      { keys: ['dread'], url: makeHref('open.spotify.com/playlist/3QgcDwMso071WWqh4eJTCL?si=_2e3RwmISQ-PP3R6TbsQmg') },
      { keys: ['drool'], url: makeHref('open.spotify.com/playlist/43jibqNWoV3Sj4cGJsOhpx?si=yjI10OGCSoKcJc20EW49iA') },
      { keys: ['bootsncats', 'bootsandcats', 'bootscats'], url: makeHref('open.spotify.com/playlist/4GYGq1VmpPT2aweHl5yLS7?si=K1RK7-zwStml1ee3tTASyw') },
      { keys: ['allnight', 'alldayallnight'], url: makeHref('open.spotify.com/playlist/703gd0eJCS5nsoxMW7NYR3?si=zYt8wmP1TC6k7BJxWq8HCg') },
      { keys: ['balcony'], url: makeHref('open.spotify.com/playlist/7ayVBYen2Hwe5qvjp7cujV?si=1WEeUq4BSMq8MVfHaNFWsQ') },
      { keys: ['alcyon'], url: makeHref('open.spotify.com/playlist/0FvQRdr7xzP7r4aB3MqwsL?si=xPpnrOfQQ4aO8Q0CZxzTKw') },
      { keys: ['up'], url: makeHref('open.spotify.com/playlist/33eEHuvncWqmX7jTSjOSAG?si=c3iQyaVYSSqGuN6Hm-ShZw') },
      { keys: ['ember'], url: makeHref('open.spotify.com/playlist/7HnipDQQEx8MXJSnrvex14?si=_CvyCuqaREmq9J7QOrFFWw') },
      { keys: ['softshift', 'soft-shift'], url: makeHref('open.spotify.com/playlist/1sCO89rivccsFoMSBCDnhc?si=MEzGKlm9QJiSXK_5nKtrMg') },
      { keys: ['jetlag'], url: makeHref('open.spotify.com/playlist/2ykXvhJ61OVtV1ITQdfUG6?si=_HRz7PkqTAGau__F_FSfEQ') },
      { keys: ['finalem'], url: makeHref('open.spotify.com/playlist/6x81bMrhxJcdlFkHoyphJM?si=mWKV8-RAQui48hSHnMoIsQ') },
      { keys: ['thread'], url: makeHref('open.spotify.com/playlist/1bonzLGkuzaXyjR0dReAkl?si=wNCFa6jRSYCuCEzqWNuT6A') },
      { keys: ['pre'], url: makeHref('open.spotify.com/playlist/7jb0g0v5TCwdQyVSIKgVyW?si=Cxabr-fdQ8CQavDW9Zm1fg') },
      { keys: ['trib', 'tribal'], url: makeHref('open.spotify.com/playlist/2YVOa8tHwdkEhSldX847v8?si=KxhkepbZRpe8NWtQn_Y_3Q') },
      { keys: ['polus'], url: makeHref('open.spotify.com/playlist/20Hvf0jU5M2oni5B0Fli54?si=rycEtfxyTF2T9hRAU_3Feg') },
      { keys: ['hatch'], url: makeHref('open.spotify.com/playlist/620I9iawsJDaztjBDiw5U2?si=ViCVm-MBS1CEJ9h5hMxukg') },
      { keys: ['c-techno', 'chill-techno', 'ctechno'], url: makeHref('open.spotify.com/playlist/0z1SLxEYFoAYL7ukDaf0QP?si=wvPoI8d4THaOGnNkwiL0FQ') },
      { keys: ['eternal'], url: makeHref('open.spotify.com/playlist/6fvEAAtftBTSV7z3qvKVUJ?si=VElczPJxT0yN22LPOE0ahg') },
      { keys: ['pray'], url: makeHref('open.spotify.com/playlist/6TilkZjRp1H9hnH0MEEPrV?si=S_Iw1GqMQ0ydjk7-n6haww') },
      { keys: ['hlish', 'helish'], url: makeHref('open.spotify.com/playlist/2SoRCqMe8pdQRNPI1WiyXB?si=frY5zD5QT9S-UPOX0TAPdg') },
      { keys: ['gap'], url: makeHref('open.spotify.com/playlist/5OLSiw9S1pkBNpqncAumaH?si=EQaWZacUSNyVn0rjtQsaDg') },
      { keys: ['cosmos'], url: makeHref('open.spotify.com/playlist/2in56lWowq2PEFEnwaHC7b?si=chU5ymw_TyWx01h6DLUskw') },
      { keys: ['onethirty', '130'], url: makeHref('open.spotify.com/playlist/6LvIPW238tiZYpllGhBchy?si=UK1kqtm_SMq16877o6Frrw') },
      { keys: ['uprising'], url: makeHref('open.spotify.com/playlist/49oyXfkxlR8MULY547NKGV?si=U_5KCounQXiOhV6GwM7gXw') },
      { keys: ['override'], url: makeHref('open.spotify.com/playlist/2mI5w3rw806BKgpGCOAerg?si=CqgICGjLTfOgY8NL52awvg') }
    ]
  },
  {
    keys: ['instagram', 'insta'],
    url: makeHref('instagram.com/joa.qo'),
  },
  {
    keys: ['mixcloud'],
    url: makeHref('mixcloud.com/iknowus'),
  },
  {
    keys: ['soundcloud'],
    url: makeHref('soundcloud.com/iknowus'),
  },
  {
    keys: ['github', 'git'],
    url: makeHref('github.com/joacoesteban'),
  },
  {
    keys: ['linkedin'],
    url: makeHref('linkedin.com/in/joaquin-esteban-627ab6183/'),
  },
  {
    keys: ['steam'],
    url: makeHref('steamcommunity.com/id/whimahwhe/'),
  },
  {
    keys: ['contact', 'mail', 'email'],
    url: 'mailto:me@joacoesteban.com'
  },
  {
    keys: ['cv'],
    url: makeHref('github.com/joacoesteban/cv')
  },
  {
    keys: ['upwork'],
    url: makeHref('upwork.com/freelancers/joaco')
  }
]