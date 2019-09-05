import React from 'react';
import Header2 from '../Header2';
import './style.scss';

const About = () => {
    return (
        <React.Fragment>
            <Header2 />
            <div className='about__page'>
                <div className={'container'}>
                    <h1>About Page</h1>
                    <div className={'row'}>
                        <div className={'col-md-4'}>
                            <img src='assets/images/Category/grid_3.jpg' alt="about_image" />
                        </div>

                        <div className={'col-md-8'}>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;