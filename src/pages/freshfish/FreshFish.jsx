import React, { useState, useEffect } from 'react';
import './freshfish.scss';
import { MdArrowForwardIos } from "react-icons/md";
import { useCart } from '../../context/CartContext';

const freshfish = [
  { name: "Rehu Jinda", price: 250, url: "rehu-jinda.png" },
  { name: "Katla Jinda", price: 350, url: "katla-jinda.png" },
  { name: "Pangasius", price: 180, url: "pangasius.jpg" },
  { name: "Roopchand", price: 180, url: "roopchand.png" },
  { name: "Boneless", price: 350, url: "boneless.jpg" },
  { name: "Telapia", price: 250, url: "telapia.jpg" },
  { name: "Bowari", price: 300, url: "bowari.png" },
  { name: "Reetha", price: 300, url: "reetha.jpeg" },
  { name: "Rehu Barf", price: 180, url: "rehu-barf.jpg" },
  { name: "Katla Barf", price: 250, url: "katla-barf.webp" },
  { name: "Rehu Peti (300 GM)", price: 200, url: "rehu-peti.webp" },
  { name: "Katla Peti (300 GM)", price: 220, url: "katla-peti.jpg" },
  { name: "Egg", price: 200, url: "egg.jpg" },
  { name: "Gosta", price: 400, url: "gosta.jpg" },
];




const FreshFish = () => {
  const { addToCart, removeFromCart, cart, CartOpen, setCartOpen } = useCart();
    
  const getQuantity = (itemName) => {
    const found = cart.find(i => i.name === itemName);
    return found ? found.quantity : 0;
  };

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
            {freshfish.map((item, index) => {
              const qty = getQuantity(item.name);
              return (
                <div className="card-f" key={index}>
                  <div className="fimg">
                    <img src={item.url} alt={item.name} />
                  </div>
                  <div className="fishinfo">
                    <h3>{item.name}</h3>
                    <p>Rs. {item.price}/- KG</p>
                  </div>

                  <div className="addtocart">
                    {qty === 0 ? (
                      <button onClick={() => addToCart(item)}>Add to Cart</button>
                    ) : (
                      <>
                      <div className="qty-selector">
                        <button onClick={() => removeFromCart(item)} className='left'>-</button>
                        <span>{qty}</span>
                        <button onClick={() => addToCart(item)} className='right'>+</button>
                      </div>
                      <div className='view'><button onClick={()=>setCartOpen(!CartOpen)}> View Cart</button></div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FreshFish;
