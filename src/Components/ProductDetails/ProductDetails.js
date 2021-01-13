import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Navbar from '../ShareComponents/Navbar/Navbar';

const ProductDetails = () => {
    const { product_id }  = useParams()

    const product = fakeData.find(products => products.key === product_id);
    
    return (
        <>
            <Navbar />
            <div>
                <h1>This is Product Details {product.name}</h1>
            </div>
        </>
    );
};

export default ProductDetails;