import React, { useState, useEffect } from 'react';
import './smallfish.scss';
import { MdArrowForwardIos } from "react-icons/md";

const smallfish = [
  { name: "Tengra", price: 250, url: "tengra.jpg" },
  { name: "Naini / Rewa", price: 200, url: "naini.jpg" },
  { name: "Bachwa", price: 300, url: "bachwa.jpg" },
  { name: "Baspata", price: 800, url: "baspata.jpg" },
  { name: "Chelwa (3 Inch)", price: 280, url: "chelwa.jpg" },
  { name: "Gainchi", price: 900, url: "gainchi.jpg" },
  { name: "Tengra (Big Size)", price: 600, url: "tengra-big.jpg" },
  { name: "Singhi", price: 800, url: "singhi.jpg" },
  { name: "Bata", price: 200, url: "bata.jpg" },
  { name: "Baami", price: 300, url: "baami.jpg" },
  { name: "Bhola", price: 200, url: "bhola.jpg" },
  { name: "Palwa", price: 600, url: "palwa.jpg" },
];



const SmallFish = () => {
  const [quantities, setQuantities] = useState(smallfish.map(() => 0));
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
    const updatedCart = smallfish
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
            {smallfish.map((item, index) => (
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

export default SmallFish;
