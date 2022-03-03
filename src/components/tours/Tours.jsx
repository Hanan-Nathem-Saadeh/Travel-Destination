import "./Tours.css";
import React from 'react';

const Tours = (props) => {
    return (
        <>
            {
                props.tours.map(Tour => {
                    return (
                        <div>
                            <p id="head">{Tour.name}</p>
                            <img id="img1" src={Tour.image} alt="" />
                            {/* <Link key={city.id} to={`city/${city.id}`}>
                                <Tour data={city} />
                            </Link> */}
                        </div>
                    )

                })
            }
        </>
    )
}

export default Tours;