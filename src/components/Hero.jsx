import hero from '../assets/hero.jpg';
import PropTypes from 'prop-types';

const Hero = ({ scrollValue }) => {
  const translateY = Math.round(scrollValue / 8)
  return (
    <div className="flex flex-col justify-end items-center h-full">
      <img src={hero} alt="hero" style={{ transform: `translateY(${translateY}px)` }} className="w-full h-full will-change-transform -z-10 pointer-events-none absolute top-0 left-0 object-cover" />
      <div className="w-full">
        <p className=" text-nearWhite text-center text-lg 2xl:text-xl">New Arrival</p>
        <h1 className="mb-16 lg:mb-[120px] 2xl:mb-[200px]  text-white font-bold text-5xl 2xl:text-7xl uppercase text-center">Spider-Man : Across<br/>The Spider-Verse</h1>
      </div>     
    </div>
  )
}

Hero.propTypes = {
  scrollValue: PropTypes.number,
}

export default Hero
