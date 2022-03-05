
import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";


function Home({ data }) {
    return (
        <>
            <Header />
            <Tours data={data} />
            <Footer />
        </>
    )
}
export default Home;