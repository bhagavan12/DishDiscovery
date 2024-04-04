// import React, { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import "./LandingPage.css";
// const imageData = [
//   {
//     label: "Image 1",
//     alt: "image1",
//     url:"./Brown and Orange Vintage Modern Americana Restaurant and Food Banner_1.png"
//   },
//   {
//     label: "Image 2",
//     alt: "image2",
//     url:
//       "./Brown and Orange Vintage Modern Americana Restaurant and Food Banner_2.png"
//   },
//   {
//     label: "Image 3",
//     alt: "image3",
//     url: "./Brown and Orange Vintage Modern Americana Restaurant and Food Banner_3.png"
//   },
//   {
//     label: "Image 4",
//     alt: "image4",
//     url: "./Brown and Orange Vintage Modern Americana Restaurant and Food Banner_4.png"
//   }
// ];

// const renderSlides = imageData.map((image) => (
//   <div key={image.alt}>
//     <img src={image.url} alt={image.alt} />
//   </div>
// ));

// export default function LandingPage() {
//   const [currentIndex, setCurrentIndex] = useState();
//   function handleChange(index) {
//     setCurrentIndex(index);
//   }
//   return (
//     <div>
//       <div className="landing">
//         <Carousel
//           showThumbs={false}
//           showArrows={true}
//           autoPlay={true}
//           infiniteLoop={true}
//           selectedItem={imageData[currentIndex]}
//           onChange={handleChange}
//           className="carousel-container"
//         >
//           {renderSlides}
//         </Carousel>
//       </div>
//       <div>
//         <ul className="nav nav-pills nav-fill">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">
//               Active
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">
//               Active
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">
//               Active
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">
//               Active
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
// {/* <p className="legend">{image.label}</p> */ }

import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import Types from "./Types";
const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
      "./Brown and Orange Vintage Modern Americana Restaurant and Food Banner_1.png"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "./Brown and Orange Vintage Modern Americana Restaurant and Food Banner_2.png"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "./Brown and Orange Vintage Modern Americana Restaurant and Food Banner_3.png"
  },
  {
    label: "Image 4",
    alt: "image4",
    url: "./Brown and Orange Vintage Modern Americana Restaurant and Food Banner_4.png"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <>
      <div className="landing">
        <div className="carousel-container">
          <Carousel
            showThumbs={false}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            selectedItem={imageData[currentIndex]}
            onChange={handleChange}
          >
            {renderSlides}
          </Carousel>
        </div>
        {/* <div className="nav-tabs-container container">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">Active</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
          </li>
        </ul>
      </div> */}

      </div>
      <Types />
    </>
  );
}
