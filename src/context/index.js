import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const category_provider = createContext();

const CategoryContext = props => {
    // create state and set state
    const [cat, setCat] = useState([]);


    // function fetch data from api
    const fetchCategoryList = () => {
        axios.get('api/category.json').then(res => {
            setCat(res.data.category);
            console.log(res.data.category)
        }).catch(err => {
            console.log(err);
        });
    };

    // Use useEffect To get data from api like componentDidMount
    useEffect(() => {
        fetchCategoryList();
    }, [])

    return (

        // Create Contex Provider and output value to any component last
        <category_provider.Provider value={[cat, setCat]}>
            {props.children}
        </category_provider.Provider>
    );
}

export default CategoryContext;