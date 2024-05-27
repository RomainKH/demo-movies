import PropTypes from 'prop-types'
import push from '../assets/push.jpg'

const BottomPage = ({ scrollValue }) => {
  const scroll = (scrollValue / window.innerHeight) - 2
  const translateY = Math.round(scroll * 100)
  return (
    <div className="h-full relative overflow-hidden">
      <img src={push} alt="hero" style={{ transform: `translateY(${translateY}px)` }} className="w-full h-[120vh] will-change-transform -z-10 pointer-events-none absolute -top-[100px] left-0 object-cover object-left lg:object-center" />
      <div style={{ transform: `translateY(-${translateY * 2}px)` }} className="w-full absolute top-[62%] left-0">
        <p className=" mb-4 text-nearWhite font-regular text-center text-lg lg:text-xl 2xl:text-2xl">Collection</p>
        <h1 className="mb-10  text-white font-bold text-4xl lg:text-6xl uppercase text-center">Le cinéma de<br/>Denis Villeneuve</h1>
        <a href="https://www.imdb.com/name/nm0898288/" target="_blank" className="bg-nearWhite py-2 text-sm  font-bold px-4 rounded-full uppercase text-dark">Découvrir</a>
      </div>     
    </div>
  )
}


BottomPage.propTypes = {
  scrollValue: PropTypes.number,
};  

export default BottomPage
