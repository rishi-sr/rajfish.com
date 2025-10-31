import React from 'react'
import './shopinfo.scss'
import { Link } from 'react-router-dom'

const Shopinfo = () => {
  return (
   <>
   <div className="shopinfo">
        <div className="info">
            <div className="freshfish">
                <img src="riverfish.jpg" alt="" />
                <div className="over"></div>
                <div className="details-rf">
                    <div className="text">
                        <h2>FRESH FISH</h2>
                        <p>Straight from the Sea, Just for You.</p>
                    </div>

                    <div className="button">
                        <div className="lineh"></div>
                        <Link to="/freshfish"><button>Explore Fresh Fish</button></Link>
                    </div>
                </div>
            </div>



            <div className="info2">
                <div className="add">
                   <img src="overlay.png" alt="" />
                </div>


                <div className="seafood">
                    <img src="seafood1.jpg" alt="" />
                    <div className="over"></div>
                <div className="details-seaf">
                    <div className="text">
                        <h2>    SEA FOOD</h2>
                        <p>Straight from the Sea, Just for You.</p>
                    </div>

                    <div className="button">
                        <div className="lineh"></div>
                        <Link to="/seafood"><button>Explore Sea Food</button></Link>
                    </div>
                </div>
                </div>
            </div>



            <div className="smallfish">
                <img src="smallfish1.jpg" alt="" />
                <div className="over"></div>
                <div className="details-sf">
                    <div className="text">
                        <h2>SMALL FISH</h2>
                        <p>Straight from the Sea, Just for You.</p>
                    </div>

                    <div className="button">
                        <div className="lineh"></div>
                        <Link to="/smallfish"><button>Explore Small Fish</button></Link>
                    </div>
                </div>
            </div>
        </div>
   </div>
   </>
  )
}

export default Shopinfo
