// import React, { useEffect, useState } from 'react'
// import './App.css';
// // import Recipe1 from './Recipe';
// import RecipePage from './RecipePage';
// import Recipe from './Rcomp';
// const App = () => {
//   const APP_ID = "apiid";
//   const APP_KEY = "appkey";
//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("chicken");
//   useEffect(() => {
//     getRecipes();
//   }, [query])
//   const getRecipes = async () => {
//     const response = await fetch
//       (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
//     const data = await response.json();
//     setRecipes(data.hits);
//     // console.log(data); 

//   };
//   const updateSearch = e => {
//     setSearch(e.target.value);
//   };
//   const getSearch = e => {
//     e.preventDefault();
//     setQuery(search);
//     setSearch("");
//   }

//   return (
//     <div className="App1">
//       <form className="search-form" onSubmit={getSearch} >
//         <input className="search-bar" type="text" value={search}
//           onChange={updateSearch} />
//         <button className="search-button" type="submit" >
//           Search
//         </button>
//       </form>
      
//       <div className="recipes">
//         {recipes.map(recipe => (
//           <Recipe
//             key={recipe.recipe.label}
//             title={recipe.recipe.label}
//             calories={recipe.recipe.calories}
//             image={recipe.recipe.image}
//             ingredients={recipe.recipe.ingredients}
//             source={recipe.recipe.source}
//             url={recipe.recipe.url}
//             dietLabels={recipe.recipe.dietLabels}
//             healthLabels={recipe.recipe.healthLabels}
//             cuisineType={recipe.recipe.cuisineType}
//           />

//         ))}
//       </div>
//     </div>
//   );
// }

// export default App; 
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import RecipePage from './RecipePage';
// import Recipe from './Rcomp';
// import { useParams } from 'react-router-dom';

// const App = () => {
//   const APP_ID = "appid";
//   const APP_KEY = "appkey";
//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState("");
//   const {searchP}=useParams();
//   const [query, setQuery] = useState("apple oatmeal");
  
//   useEffect(() => {
//     getRecipes();
//   }, [query]);

//   const getRecipes = async () => {
//     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
//     const data = await response.json();
//     setRecipes(data.hits);
//   };
  
//   const updateSearch = e => {
//     setSearch(e.target.value);
//   };
  
//   const getSearch = e => {
//     e.preventDefault();
//     setQuery(searchP);
//     setSearch("");
//   };

//   return (
//     <div className="App1">
//       {/* Removed the search form */}
//       <div className="recipes">
//         {recipes.map(recipe => (
//           <Recipe
//             key={recipe.recipe.label}
//             title={recipe.recipe.label}
//             calories={recipe.recipe.calories}
//             image={recipe.recipe.image}
//             ingredients={recipe.recipe.ingredients}
//             source={recipe.recipe.source}
//             url={recipe.recipe.url}
//             dietLabels={recipe.recipe.dietLabels}
//             healthLabels={recipe.recipe.healthLabels}
//             cuisineType={recipe.recipe.cuisineType}
//           />
//         ))}
//       </div>
//       </div>
//   );
// }

// export default App; 
import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Rcomp';
import { useParams } from 'react-router-dom';

const App = () => {
  const APP_ID = "appid";
  const APP_KEY = "appkey";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
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
    <div className="App1">
      <div className="recipes">
      {recipes.length === 0 ? (
          <p>{query} not found</p>
        ) : (
          recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              source={recipe.recipe.source}
              url={recipe.recipe.url}
              dietLabels={recipe.recipe.dietLabels}
              healthLabels={recipe.recipe.healthLabels}
              cuisineType={recipe.recipe.cuisineType}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
