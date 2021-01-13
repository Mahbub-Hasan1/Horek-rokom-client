import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import fakeData from '../../../fakeData';
import './AllProducts.css';


const AllProducts = () => {

    const [products, setProducts] = useState(fakeData)
    console.log(products)

    // history.push(e)
    const history = useHistory()
    const ProductDetails = (e) => {
        history.push(`/ProductDetails=${e}`)
    }


    return (
        <div>
            <Row>
                {
                    products.map(product =>
                        <Col key={product.key}
                            onClick={() => ProductDetails(product.key)}
                            className="product-card g-2"
                            xs={6} md={3} sm={4} lg={2}
                        >
                            <img className="img-fluid" src={product.img} alt="img" />
                            <p contentEditable="true">{product.name.slice(0,35)}...</p>
                            <h5>TK 18666</h5>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default AllProducts;