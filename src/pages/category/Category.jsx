import React from 'react'
import './category.scss'


const card=[
  {url:'/freshfish.jpg', name:"Fresh Fish", price:"₹ 180/- Kg"},
  {url:'/seafood.jpg', name:"Sea Food", price:"₹ 250/- Kg"},
  {url:'/smallfish.jpg', name:"Small Fish", price:"₹ 200/- Kg"}
]
const Category = () => {
  return (
    <>
    <div className="category">
      <div className="cat-part">
        <div className="heading">
          <h1>WE OFFER THE BEST FOR YOU</h1>
          <p>Catch of the day delivered your way.</p>
        </div>
        <div className="cat-cards">
          {card.map((i, key)=>(
          <div className="cat_card" key={key}>
            <div className="cat-img">
              <img src={i.url} alt="" />
            </div>
            <div className="cat-info">
              <h3>{i.name}</h3>
              <p>Start from <span>{i.price}</span></p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Category
