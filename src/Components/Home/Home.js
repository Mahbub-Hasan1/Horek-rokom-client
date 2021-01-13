import React from 'react';
import './Home.css';
import Navbar from '../ShareComponents/Navbar/Navbar';
import AllProducts from './AllProducts/AllProducts';


const Home = () => {

    return (
        <>
            <Navbar />
            <AllProducts />
        </>
    );
};

export default Home;