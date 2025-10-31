import React, { useState, useEffect } from 'react';
import './freshfish.scss';
import { MdArrowForwardIos } from "react-icons/md";

const freshfish = [
  { name: "Rehu Jinda", price: 250, url: "rehu-jinda.jpg" },
  { name: "Katla Jinda", price: 350, url: "katla-jinda.jpg" },
  { name: "Pangasius", price: 180, url: "pangasius.jpg" },
  { name: "Roopchand", price: 180, url: "roopchand.jpg" },
  { name: "Boneless", price: 350, url: "boneless.jpg" },
  { name: "Telapia", price: 250, url: "telapia.jpg" },
  { name: "Bowari", price: 300, url: "bowari.jpg" },
  { name: "Reetha", price: 300, url: "reetha.jpg" },
  { name: "Rehu Barf", price: 180, url: "rehu-barf.jpg" },
  { name: "Katla Barf", price: 250, url: "katla-barf.jpg" },
  { name: "Rehu Peti (300 GM)", price: 200, url: "rehu-peti.jpg" },
  { name: "Katla Peti (300 GM)", price: 220, url: "katla-peti.jpg" },
  { name: "Egg", price: 200, url: "egg.jpg" },
  { name: "Gosta", price: 400, url: "gosta.jpg" },
];




const FreshFish = () => {
  const [quantities, setQuantities] = useState(freshfish.map(() => 0));
  const [cart, setCart] = useState([]);

  const increment = (index) => {
    const newQty = [...quantities];
    newQty[index] += 1;
    setQuantities(newQty);
  };

  const decrement = (index) => {
    const newQty = [...quantities];
    if (newQty[index] > 0) {
      newQty[index] -= 1;
      setQuantities(newQty);
    }
  };

  useEffect(() => {
    const updatedCart = freshfish
      .map((item, index) => ({
        ...item,
        quantity: quantities[index],
        total: item.price * quantities[index],
      }))
      .filter(item => item.quantity > 0);
    
    setCart(updatedCart);
  }, [quantities]);

  useEffect(() => {
    console.log("🛒 Cart updated:", cart);
  }, [cart]);

  return (
    <div className="freshfish">
      <div className="ffbanner">
        <div className="ffoverlay">
          <img src="overlay.png" alt="" />
        </div>
        <div className="ffbanner-mini">
          <h1>Fresh Fish</h1>
          <p>Home <MdArrowForwardIos /> freshFish</p>
          <div className="minioverlay">
            <img src="overlay.png" alt="" />
          </div>
        </div>
      </div>

      <div className="fishes">
        <div className="fishescards">
          <div className="fishheading">
            <h2>Explore The Best Fresh/River Fish</h2>
          </div>

          <div className="cards-f">
            {freshfish.map((item, index) => (
              <div className="card-f" key={index}>
                <div className="fimg">
                  <img src="smallfish.jpg" alt={item.name} />
                </div>
                <div className="fishinfo">
                  <h3>{item.name}</h3>
                  <p>Rs. {item.price}/- KG</p>
                </div>

                <div className="addtocart">
                  {quantities[index] === 0 ? (
                    <button onClick={() => increment(index)}>Add to Cart</button>
                  ) : (
                    <div className="qty-selector">
                      <button onClick={() => decrement(index)} className='left'>-</button>
                      <span>{quantities[index]}</span>
                      <button onClick={() => increment(index)} className='right'>+</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FreshFish;
