import React, { useState, useEffect } from 'react';
import './smallfish.scss';
import { MdArrowForwardIos } from "react-icons/md";
import { useCart } from '../../context/CartContext';

const smallfish = [
  { name: "Tengra", price: 250, url: "tengra.jpg" },
  { name: "Naini / Rewa", price: 200, url: "naini.jpg" },
  { name: "Bachwa", price: 300, url: "bachwa.jpg" },
  { name: "Baspata", price: 800, url: "baspata.jpg" },
  { name: "Chelwa (3 Inch)", price: 280, url: "chelwa.jpg" },
  { name: "Gainchi", price: 900, url: "gainchi.jpeg" },
  { name: "Tengra (Big Size)", price: 600, url: "tengra-big.webp" },
  { name: "Singhi", price: 800, url: "singhi.jpg" },
  { name: "Bata", price: 200, url: "bata.jpg" },
  { name: "Baami", price: 300, url: "baami.jpg" },
  { name: "Bhola", price: 200, url: "bhola.jpg" },
  { name: "Palwa", price: 600, url: "palwa.jpeg" },
];



const SmallFish = () => {
  const { addToCart, removeFromCart, cart, setCartOpen, CartOpen } = useCart();
  
    const getQuantity = (itemName) => {
      const found = cart.find(i => i.name === itemName);
      return found ? found.quantity : 0;
    };

  return (
    <div className="smallfish">
      <div className="sfbanner">
        <div className="sfoverlay">
          <img src="overlay.png" alt="" />
        </div>
        <div className="sfbanner-mini">
          <h1>Small Fish</h1>
          <p>Home <MdArrowForwardIos /> SmallFish</p>
          <div className="minioverlay">
            <img src="overlay.png" alt="" />
          </div>
        </div>
      </div>

      <div className="fishes">
        <div className="fishescards">
          <div className="fishheading">
            <h2>Explore The Best Small Fish</h2>
          </div>

          <div className="cards-f">
            {smallfish.map((item, index) => {
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

export default SmallFish;
