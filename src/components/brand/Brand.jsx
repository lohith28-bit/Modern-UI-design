import React from 'react';
import './brand.css';
import {google,slack,dropbox,shopify,atlassian} from './imports';
import topsticker from  '../../assets/gotop.png';

export const Brand = () => {
    return (
        <div className='gpt3_brand section-padding'>
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div>
            <div>
                <img src={atlassian} alt="atlassian" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
            <span className="gpt3_brand-top">
            <a href="#top"><img src={topsticker} alt="topsticker"/></a>
            </span>
        </div>
    )
}
export default Brand