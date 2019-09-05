import React from 'react';
import './style.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h3> what we offer </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua.
                        </p>
                    </div>

                    <div className='col-md-3'>
                        <h3> important links </h3>
                        <ul>
                            <li> About us </li>
                            <li> jobs </li>
                            <li> shops </li>
                            <li> contact </li>
                            <li> blog </li>
                        </ul>
                    </div>

                    <div className='col-md-4'>
                        <h3> recent post </h3>
                        <h4>multi-purpose creative theme</h4>
                        <h4>sed diam nonumy eirmod tempor</h4>
                        <h4>invidunt ut labore et dolore</h4>
                        <h4>Lorem ipsum dolor sit amet,</h4>
                    </div>
                </div>
            </div>
            <div className='bg-footer'></div>
        </div>
    );
}

export default Footer;