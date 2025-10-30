import React from 'react'
import './hero.scss'
import { MdExplore } from "react-icons/md";

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="overlay">
            <img src="overlay.png" alt="" />
        </div>
        <div className="hero1">
            <div className="margin"></div>
            <div className="banner">
                <img src="banner.png" alt="" />
            </div>
        </div>
        <div className="hero2">
            <div className="heading">
                <div className="h1">
                    <h1>Fresh From The Sea To Your Plate</h1>
                </div>
                <div className="p">
                    <p>Experience the finest selection of fresh seafood, delivered straight to your doorstep. Dive into quality and taste with every bite.</p>
                </div>
            </div>
            <div className="button">
                <div className="lineh"></div>
                <button><MdExplore /> Explore</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
