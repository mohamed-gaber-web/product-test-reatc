import React, { useContext } from 'react';
import './style.scss';
import { category_provider } from '../../context/index.js';

const Category = () => {
    const [AllCategory] = useContext(category_provider);

    return (
        <React.Fragment>
            <div className='category__section' >
                <h1> popular category </h1>
                <div className='container'>
                    <div className='row'>
                        {
                            AllCategory.map(cat => {
                                return (
                                    <div key={cat.id} className='col-md-3 col-sm-6 col-xs-12'>
                                        <img src={cat.image} alt={cat.title} />
                                        <h3> {cat.title} </h3>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Category;