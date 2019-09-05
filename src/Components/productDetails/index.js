import React, { useEffect, useState } from "react";
import Header2 from '../Header2';
import './style.scss';
import axios from "axios";
import { connect } from 'react-redux';
import { cartItemsWithQuantity } from '../../cart';

const ProductDetails = (props) => {
    // Logic Offers
    const [product, setProduct] = useState([]);
    //const [qut, setQut] = useState(0);
    const itemCart = cartItemsWithQuantity(props.Cart).filter(item => item.id === product.id)[0];


    const fetchDetailsProduct = () => {
        const id = props.match.params.id - 1;
        axios.get('../api/offer.json').then(res => {
            setProduct(res.data[id]);
        }).catch(err => {
            console.log(err)
        });
    };

     // Handle Quantity
    // const handelQuantity = (event) => {
    //     if (event.target.value < 0) {
    //         return;
    //     }
    //     setQut(event.target.value);
    // }

    // Use useEffect To get data from api like componentDidMount
    useEffect(() => {
        fetchDetailsProduct();
    }, []);

    console.log(props);

    return (

        <React.Fragment>
            <Header2 />
            <div className={'single__product'}>
                <div className={'container'}>
                    <div className={'product'}>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={product.image} alt="" className={'img-fluid'} />
                            </div>

                            <div className="col-md-8">
                                <h3> {product.title} </h3>
                                <p> {product.content}</p>
                                <h4> {product.price} $ </h4>
                                {/* <h4> Total: {qut * product.price} </h4>
                                <input type="number" name="" value={qut} placeholder="Quantity" onChange={handelQuantity} /> */}
                                <br /><br />
                                <button 
                                onClick={() => props.addToCart(product)} 
                                className="btn btn-primary"> 
                                Add to cart ({(itemCart && itemCart.quantity) || 0})  </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
};

const mapStateToProps = (state) => {
    return {
        Cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch({ type: "ADD", payload: item }),
        removeFromCart: (item) => dispatch({ type: "REMOVE", payload: item })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);


