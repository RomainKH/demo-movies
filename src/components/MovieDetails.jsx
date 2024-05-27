import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';
import star from '../assets/star.svg'
import sticky1 from '../assets/sticky-1-monster.jpg'
import sticky2 from '../assets/sticky-2-anatomy.jpg'
import sticky3 from '../assets/sticky-3-past.jpg'

export default function MovieDetails({ scrollValue, container }) {
  const movieDetailsRef = useRef(null)
  const second = useRef(null)
  const third = useRef(null)
  const textContainer = useRef(null)
  const subText1 = useRef(null)
  const subText2 = useRef(null)
  const subText3 = useRef(null)
  const image1 = useRef(null)
  const image2 = useRef(null)
  const image3 = useRef(null)

  useEffect(() => {
    movieDetailsRef.current.addEventListener('scroll', () => {
      const insideScroll = Number(movieDetailsRef.current.scrollTop / window.innerHeight).toFixed(2)
      if (container) {
        if(insideScroll > 0 && insideScroll < 2) {
          container.classList.add("removeScroll")
        } else {
          container.classList.remove("removeScroll")
        }
      }

      textContainer.current.style.transform = `translateX(-${insideScroll * 82}vw)`
      if(insideScroll >= 0 && insideScroll < 0.5) {
        // background color
        second.current.classList.remove("display-circle-bg")

        // text color
        subText1.current.classList.add("active-movie")
        subText2.current.classList.remove("active-movie")

        // image position
        image1.current.classList.add("active-image-movie")
        image1.current.classList.remove("hide-image-movie")
        image2.current.classList.remove("active-image-movie")
      } else if (insideScroll >= 0.5 && insideScroll < 1.5) {
        // background color
        second.current.classList.add("display-circle-bg")
        third.current.classList.remove("display-circle-bg")

        // text color
        subText2.current.classList.add("active-movie")
        subText1.current.classList.remove("active-movie")
        subText3.current.classList.remove("active-movie")

        // image position
        image2.current.classList.add("active-image-movie")
        image2.current.classList.remove("hide-image-movie")
        image1.current.classList.add("hide-image-movie")
        image1.current.classList.remove("active-image-movie")
        image3.current.classList.remove("active-image-movie")
      } else if (insideScroll >= 1.5 && insideScroll < 2) {
        // background color
        third.current.classList.add("display-circle-bg")

        // text color
        subText3.current.classList.add("active-movie")
        subText2.current.classList.remove("active-movie")

        // image position
        image2.current.classList.add("hide-image-movie")
        image2.current.classList.remove("active-image-movie")
        image3.current.classList.add("active-image-movie")
      }
    })
  }, [])
  return (
    <div ref={movieDetailsRef} className="overflow-y-scroll h-full scroll-smooth snap-always snap-mandatory snap-y no-scrollbar">
      <div className="h-[100vh] absolute -z-0 top-0 w-full bg-darkRed">
        <div ref={second} className="h-full hidden-circle-bg w-full transition-[clip-path] duration-700 bg-blue">
          <div ref={third} className="h-full hidden-circle-bg w-full transition-[clip-path] duration-700 bg-brown">
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full h-full block absolute top-0 left-0">
        <div ref={textContainer} className="w-[246vw] pointer-events-none justify-start h-full z-10 flex flex-row items-start pt-[35vh]">
          <div className="w-[82vw]">
            <div ref={subText1} className="movie-month-selection w-[270px] lg:w-[528px] !opacity-100">
              <p className="text-nearWhite text-left font-bold text-4xl xl:text-5xl lg:whitespace-nowrap uppercase">Monster <span className="font-regular text-lg">8.6/10</span></p>
              <p className="text-left text-sm xl:text-md text-nearWhite">When her young son Minato starts to behave strangely, his mothers fels that there is something wrong. Discovering that a teacher is responsible, she storms into the school demanding to know what's going on. But as the story unfolds through the eyes of mother, teacher and child, the truth gradually emerges.</p>
              <p className="text-nearWhite flex items-center uppercase font-bold text-left">
                <img src={star} alt="star" className="w-5 h-5 inline-block mr-2" />
                Our pick of the month
              </p>
            </div>
          </div>
          <div className="w-[82vw]">
            <div ref={subText2} className="movie-month-selection w-[270px] lg:w-[550px] xl:w-[586px]">
              <p className="text-nearWhite text-left font-bold text-4xl xl:text-5xl lg:whitespace-nowrap uppercase">Anatomy of a fall <span className="font-regular text-lg">8.2/10</span></p>
              <p className="text-left text-sm xl:text-md text-nearWhite">A woman is suspected of her husband's murder, and their blind son faces a moral dilemma as the sole witness.</p>
              <p className="text-nearWhite flex items-center uppercase font-bold text-left">
                <img src={star} alt="star" className="w-5 h-5 inline-block mr-2" />
                Our pick of the month
              </p>
            </div>
          </div>
          <div className="w-[82vw]">
            <div ref={subText3} className="movie-month-selection w-[270px] lg:w-[546px]">
              <p className="text-nearWhite text-left font-bold text-4xl xl:text-5xl lg:whitespace-nowrap uppercase">Past Lives <span className="font-regular text-lg">8.4/10</span></p>
              <p className="text-left text-sm xl:text-md text-nearWhite">Nora and Hae Sung, two childhood friends are reunites in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life.</p>
              <p className="text-nearWhite flex items-center uppercase font-bold text-left">
                <img src={star} alt="star" className="w-5 h-5 inline-block mr-2" />
                Our pick of the month
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={sticky1} ref={image1} alt="sticky1" className="image-movie -translate-y-[60%] translate-x-0 z-30 active-image-movie rotate-[5deg]" />
      <img src={sticky2} ref={image2} alt="sticky2" className="image-movie -translate-y-[50%] translate-x-4 z-20 rotate-[2deg]" />
      <img src={sticky3} ref={image3} alt="sticky3" className="image-movie -translate-y-[45%] translate-x-8 z-10" />
      <div className="h-[100vh] snap-start z-40 w-full relative"></div>
      <div className="h-[100vh] snap-start z-40 w-full relative"></div>
      <div className="h-[100vh] snap-start z-40 w-full relative"></div>
    </div>
  );
}

MovieDetails.propTypes = {
  scrollValue: PropTypes.number,
  container: PropTypes.any,
};
