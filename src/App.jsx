// import viteLogo from '/vite.svg' exemple chemin public
// TEMPS PASSE : 2H20
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import PopularMovies from './components/PopularMovies'
import MovieDetails from './components/MovieDetails'
import BottomPage from './components/BottomPage'

function App() {
  const container = useRef(null)
  const [scrollY, setScrollY] = useState(container?.current?.scrollTop)
  console.log(container?.current?.scrollTop / window.innerHeight)

  useEffect(() => {
    container?.current?.addEventListener('scroll', () => {
      setScrollY(container?.current?.scrollTop)
    })
  }, [container])

  return (
    <div ref={container} className="h-[100vh] w-full scroll-smooth snap-always snap-mandatory snap-y overflow-y-scroll">
      <section className="section !p-0">
        <Hero scrollValue={scrollY} />
      </section>
      <section className="section bg-dark">
        <PopularMovies scrollValue={scrollY} />
      </section>
      <section className="section !p-0 bg-blue-400 overflow-hidden">
        <MovieDetails scrollValue={scrollY} container={container?.current} />
      </section>
      <section className="section !p-0">
        <BottomPage scrollValue={scrollY} />
      </section>
    </div>
  )
}

export default App
