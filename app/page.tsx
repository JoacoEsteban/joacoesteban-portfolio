import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Background from '../components/Background/Background'

export default function Index() {
  return (
    <div className="max-w-[80em] mx-auto">
      <div className="flex flex-col h-screen relative">
        <title>
          Joaco Esteban - Software Engineer | Full-Stack Web Developer
        </title>

        <Background />
        <Header />
        <div className="m-auto">
          <Hero />
        </div>
      </div>
    </div>
  )
}
