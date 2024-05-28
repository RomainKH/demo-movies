import { useRef, useState } from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking-inline.css";
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/pagination';
import un from '../assets/1.jpg';
import deux from '../assets/2.jpg';
import trois from '../assets/3.jpg';
import quatre from '../assets/4.jpg';
import cinq from '../assets/5.jpg';
import six from '../assets/6.jpg';
import sept from '../assets/7.jpg';
import huit from '../assets/8.jpg';
import neuf from '../assets/9.jpg';
import dix from '../assets/10.jpg';

export default function PopularMovies({ scrollValue }) {
  const flicking = useRef(null);
  const screenScrolled = scrollValue / window.innerHeight
  if (screenScrolled > 0.5 && screenScrolled < 1.1) {
    flicking.current.next();
  }
  return (
    <>
      <div className="px-6 xl:px-0 max-w-6xl mx-auto block">
        <h2 className="uppercase font-bold text-5xl text-left  text-white">Popular Releases</h2>
        <p className="text-nearWhite text-md text-left mt-5">This week&#39;s top TV and movies</p>
      </div>
      <Flicking
        align="prev"
        className="mt-[100px] lg:mt-16"
        circular={true}
        ref={flicking}
        deceleration={0.0055}
        easing={x => 1 - Math.pow(1 - x, 4)}
        duration={900}
        moveType="freeScroll"
        renderOnlyVisible={true}
      >
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={un} alt="1" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-sm lg:text-lg xl:text-xl text-nearWhite font-bold">Zone of interest</p>
            <span className="text-xsm lg:text-sm text-nearWhite">(2024)</span>
          </div>
        </div>
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={deux} alt="2" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-sm lg:text-lg xl:text-xl text-nearWhite font-bold">Priscilla</p>
            <span className="text-xsm lg:text-sm text-nearWhite">(2024)</span>
          </div>
        </div>
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={trois} alt="3" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-sm lg:text-lg xl:text-xl text-nearWhite font-bold">Dune: Part Two</p>
            <span className="text-xsm lg:text-sm text-nearWhite">(2024)</span>
          </div>
        </div>
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={quatre} alt="4" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-sm lg:text-lg xl:text-xl text-nearWhite font-bold">Poor Things</p>
            <span className="text-xsm lg:text-sm text-nearWhite">(2024)</span>
          </div>
        </div>
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={cinq} alt="5" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-sm lg:text-lg xl:text-xl text-nearWhite font-bold">All of us strangers</p>
            <span className="text-xsm lg:text-sm text-nearWhite">(2024)</span>
          </div>
        </div>
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={six} alt="6" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-sm lg:text-lg xl:text-xl text-nearWhite font-bold">American Fiction</p>
            <span className="text-xsm lg:text-sm text-nearWhite">(2024)</span>
          </div>
        </div>
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={sept} alt="7" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-sm lg:text-lg xl:text-xl text-nearWhite font-bold">The Society of the Snow</p>
            <span className="text-xsm lg:text-sm text-nearWhite">(2023)</span>
          </div>
        </div>
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={huit} alt="8" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-sm lg:text-lg xl:text-xl text-nearWhite font-bold">Oppenheimer</p>
            <span className="text-xsm lg:text-sm text-nearWhite">(2023)</span>
          </div>
        </div>
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={neuf} alt="9" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-sm lg:text-lg xl:text-xl text-nearWhite font-bold">Spaceman</p>
            <span className="text-xsm lg:text-sm text-nearWhite">(2024)</span>
          </div>
        </div>
        <div className="relative mx-2 lg:mx-5">
          <img className="cardPopular select-none pointer-events-none" src={dix} alt="10" />
          <div className="absolute bottom-4 left-2 lg:bottom-6 lg:left-6 flex flex-row items-center gap-2">
            <p className="uppercase text-xl  text-dark font-bold ">Bottoms</p>
            <span className="text-sm text-dark">(2023)</span>
          </div>
        </div>
      </Flicking>
    </>
  );
}

PopularMovies.propTypes = {
  scrollValue: PropTypes.number,
};
