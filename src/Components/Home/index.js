import React from 'react';
import Category from '../category';
import OfferList from '../Offers/Offerlist';
import CategoryContext from '../../context/index.js';
import Header from '../Header/Header';
import Header2 from '../Header2';

import './style.scss';

const Home = props => {
    console.log(props);
    return (
        <CategoryContext>
            {props.match.url === "/" ? <Header /> : <Header2 />}
            <Category />
            <OfferList />
        </CategoryContext>

    );
};

export default Home;