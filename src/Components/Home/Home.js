import React from 'react';
import Navbar from '../ShareComponents/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div style={{background:'red'}}>
                <h1>This is Home page</h1>
            </div>
        </>
    );
};

export default Home;