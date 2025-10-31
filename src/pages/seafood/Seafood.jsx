import React, { useState, useEffect } from 'react';
import './seafood.scss';
import { MdArrowForwardIos } from "react-icons/md";

const seafood = [
  { name: "Hilsa (500 GM Size)", price: 1300, url: "hilsa.jpg" },
  { name: "Pomfret (150 GM Size)", price: 850, url: "pomfret.jpg" },
  { name: "Bhetki (1 KG Size)", price: 800, url: "bhetki.jpg" },
  { name: "Golda Chingri (6 Inch Size)", price: 900, url: "golda-chingri.jpg" },
  { name: "Prawns (3 Inch Size)", price: 420, url: "prawns.jpg" },
  { name: "Aaila", price: 250, url: "aaila.jpg" },
  { name: "Tuna", price: 400, url: "tuna.jpg" },
  { name: "Surmai (2.5 KG)", price: 800, url: "surmai.jpg" },
  { name: "Mati", price: 250, url: "mati.jpg" },
  { name: "Hilsa (250 GM)", price: 700, url: "hilsa.jpg" },
  { name: "Lote", price: 300, url: "lote.jpg" },
  { name: "Parse", price: 300, url: "parse.jpg" },
  { name: "Salmon (500 GM)", price: 500, url: "salmon.jpg" },
  { name: "Pabda", price: 500, url: "pabda.jpg" },
  { name: "Hilsa (1000 GM Size)", price: 1600, url: "hilsa.jpg" },
  { name: "Pomfret (250 GM Size)", price: 1200, url: "pomfret.jpg" },
  { name: "Crab", price: 700, url: "crab.jpg" },
  { name: "Prawns (5 Inch)", price: 600, url: "prawns.jpg" },
  { name: "Salmon (1 KG)", price: 1100, url: "salmon.jpg" },
];


const Seafood = () => {
  const [quantities, setQuantities] = useState(seafood.map(() => 0));
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

  // 🧠 Auto-update cart when quantities change
  useEffect(() => {
    const updatedCart = seafood
      .map((item, index) => ({
        ...item,
        quantity: quantities[index],
        total: item.price * quantities[index],
      }))
      .filter(item => item.quantity > 0);
    
    setCart(updatedCart);
  }, [quantities]);

  // 👀 Optional: View cart in console for testing
  useEffect(() => {
    console.log("🛒 Cart updated:", cart);
  }, [cart]);

  return (
    <div className="seafood">
      <div className="seabanner">
        <div className="seaoverlay">
          <img src="overlay.png" alt="" />
        </div>
        <div className="seabanner-mini">
          <h1>Sea Food</h1>
          <p>Home <MdArrowForwardIos /> Seafood</p>
          <div className="minioverlay">
            <img src="overlay.png" alt="" />
          </div>
        </div>
      </div>

      <div className="fishes">
        <div className="fishescards">
          <div className="fishheading">
            <h2>Explore The Best Sea Food</h2>
          </div>

          <div className="cards-f">
            {seafood.map((item, index) => (
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

export default Seafood;
