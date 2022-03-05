import Tour from "../tours/tour/Tour";
import React from 'react';

let Tours = ({data}) => {
    return(
        <>
            {
                data.map((city) => {
                    return(
                        <Tour city={city}/>
                    )

                })
            }
        </>
    )
};

export default Tours;