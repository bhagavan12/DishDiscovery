// import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './RecipePage.css'; // Import your CSS file for styling

const RecipePage = () => {
    const { serializedData, image } = useParams();
    const receivedData = JSON.parse(decodeURIComponent(serializedData));
    // console.log(receivedData.ingredients)
    console.log(receivedData.ingredients1[1].measure);
    const roundedCalories = Math.floor(receivedData.calories1);
    const handleCertificate = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div className="container bg-success-subtle">
            <div className="left-side">
                <h3>{receivedData.title1}
                    {/* <div class="tooltip-container" ></div> */}


                </h3>
                <div className="item-1">
                    <div className="card">
                        <img className="object-fit-sm-contain border rounded" src={image} alt="Image" style={{ width: "300px", height: "300px" }} />
                        <article style={{ padding: "2px" }}>
                            <div className="buttons">
                                <div class="tooltip-container bg-success bg-opacity-50">
                                    <span class="tooltip bg-success-subtle">cuisineType</span>
                                    <span class="text" style={{ color: "" }}>{receivedData.cuisineType}</span>
                                </div>
                                <div class="tooltip-container bg-success bg-opacity-50">
                                    <span class="tooltip bg-success-subtle">dietLabels</span>
                                    <span class="text">{receivedData.dietLabels.length !== 0 ? receivedData.dietLabels : "Unknown"}</span>
                                </div>
                                <div class="tooltip-container bg-success bg-opacity-50">
                                    <span class="tooltip bg-success-subtle">calories</span>
                                    <span class="text">{Math.floor(roundedCalories)}</span>
                                </div>
                                
                            </div>
                            <div class="btn d-grid gap-2 mx-auto text bg-success bg-opacity-50">
                                <span class="text fs-6" onClick={()=>handleCertificate(receivedData.url)}>Full Source</span>
                                {/* <span class="text">Full Source</span> */}
                            </div>
                        </article>
                    </div>
                    
                </div>
            </div>
            <div className="right-side">
                <div className="table-container">
                    <table className="table-light">
                        <thead className='shadow-lg p-3 mb-5 rounded bg-success bg-opacity-50 '>
                            <tr>
                                <th scope="col">Ingredients</th>
                                <th scope="col">Measure</th>
                                <th scope="col">Ref</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receivedData.ingredients1.map((ingredient, index) => (
                                <tr key={index}>
                                    <td>{ingredient.text}</td>
                                    <td>
                                        {ingredient.measure && ingredient.measure.charAt(0) !== '<' ? ingredient.measure : "-"}
                                    </td>
                                    <td><img className="ingredient-image img-thumbnail small-image" src={ingredient.image} alt={ingredient.text} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecipePage;

{/* <button type="button" class="btn btn-secondary btn-sm btm">

</button> */}
{/* <button type="button" class="btn btn-secondary btn-smvbtm">{Math.floor(roundedCalories)}</button> */ }
{/* <button type="button" class="btn btn-primary btn-sm btm">{receivedData.cuisineType}</button> */ }
{/* <div className="text">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div> */}
                {/* <div className="box">
                    <button type="button" class="btn btn-outline-primary btn-sm">Primary</button>
                    <button type="button" class="btn btn-outline-primary btn-sm">Primary</button>
                    <button type="button" class="btn btn-outline-primary btn-sm">Primary</button>
                </div> */}