import React, { useState, useEffect } from 'react';
import './style.scss';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Header2 from '../Header2';

const AllProducts = (props) => {

    // Logic Offers
    const [Offers, setOffers] = useState([]);

    const fetchOffers = () => {
        axios.get('api/offer.json').then(res => {
            setOffers(res.data);
        }).catch(err => {
            console.log(err)
        });
    };

    // Use useEffect To get data from api like componentDidMount
    useEffect(() => {
        fetchOffers();
    }, []);

    return (
        <React.Fragment>
            <Header2 />
            <div className={"offer__product"}>
                <div className={"container"}>
                    <h1> all products </h1>
                    <div className={'row'}>

                        {
                            Offers.map(offer => {
                                return (
                                    <div className={'col-md-3'} key={offer.id}>
                                        <div className={'offer'}>
                                            <img src={offer.image} alt={offer.title} className="img-fluid" />
                                            <h3> <NavLink to={"single-product/" + offer.id}> {offer.title} </NavLink></h3>
                                            <div className="text-center price">
                                                ${offer.price - 10}
                                            </div>

                                            <p> Lorem ipsum dolor sit amet,   itaque nisi quam quia quisquam </p>
                                        </div>
                                    </div>
                                );
                            })

                        }


                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AllProducts;