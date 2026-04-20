import Hero from '../components/Hero/Hero'

export default function Index() {
  return (
    <div className="max-w-[80em] mx-auto h-full">
      <div className="flex flex-col h-full relative">
        <title>
          Joaco Esteban - Software Engineer | Full-Stack Web Developer
        </title>

        <div className="m-auto">
          <Hero />
        </div>
      </div>
    </div>
  )
}
