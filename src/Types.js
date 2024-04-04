import React from 'react';
import { Link } from 'react-router-dom';
import './Type.css';

const data = [
  {
    id: 1,
    title: 'Veg Items',
    img: './veg1.jpg',
    query: 'veg'
  },
  {
    id: 2,
    title: 'Non Veg Items',
    img: './nonveg2.webp',
    query: 'non veg'
  },
  {
    id: 3,
    title: 'Cuisines',
    img: './casuin3.jpeg',
    query: 'Cuisines'
  },
  {
    id: 4,
    title: 'Dietary Items',
    img: './diet4.jpg',
    query: 'diet'
  }
];

export default function Types() {
  return (
    <div className='recipes'>
      {data.map(recipe => (
        <div key={recipe.id} className="mainbox bg-success-subtle">
          <div className="mainbox_form">
            <img src={recipe.img} alt={recipe.title} />
            <span>{recipe.title}</span>
          </div>
          <div className="mainbox_data">
            <div style={{ display: "flex" }} className="data">
              <div className="text">
                {/* <label class="text_m">Main Title</label> */}
                <div className="cube text_s bg-success-subtle">
                  <label className="side front">{recipe.query}</label>
                  <label className="side top">{recipe.id}</label>
                </div>
              </div>
            </div>
            <Link to={`/search/${recipe.query}`}>Open</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
