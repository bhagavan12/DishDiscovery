import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

const App = () => {
  const APP_ID = "b72b0cce";
  const APP_KEY = "ce0561a6abb1bfdfee890342b41086ce";
  const [recipes, setRecipes] = useState([]);
  const { query } = useParams(); // Extract the 'query' parameter from the URL
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };
  
  return (
    <div className="container">
      <section className="pt-5 pb-5">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-3">Recipes</h3>
          </div>
          <div className="col-12">
            <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {recipes.map((recipe, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="Recipe Image" src={recipe.recipe.image} />
                          <div className="card-body">
                            <h4 className="card-title">{recipe.recipe.label}</h4>
                            <p className="card-text">Calories: {recipe.recipe.calories}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#recipeCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#recipeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
