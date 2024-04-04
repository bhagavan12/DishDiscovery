// import React from 'react'

// export default function Navbar() {
//     return (
//         <div>
//             <nav className="navbar bg-body-tertiary">
//                 <div className="container-fluid">
//                     <form className="d-flex" role="search">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </nav>
//         </div>
//     )
// }
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const query = encodeURIComponent(searchTerm.trim());
        if (query) {
            // Programmatically navigate to the search results page
            navigate(`/search/${query}`);
        }
    };

    return (
        <div>
            <nav className="navbar p-3 mb-2 bg-success-subtle text-info-emphasis" >
                <div className="container-fluid">
                    <form className="d-flex" onSubmit={handleSearch} role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}
