import React from 'react';
import './Discover.css';

const Discover = () => {
    return (
        <div className="discover--wrapper">
            <div className="discover--empty"><div className="discover--empty--inner"></div></div>
            <div className="discover--content--wrapper">
                <div className="discover--content--box">
                    <div className="discover--content--box--inner">
                        <span className="discover--content--title">Discover concerts</span>
                        <div className="discover--content--item--list">
                            <div className="discover--content--item--1"></div>
                            <div className="discover--content--item--2"></div>
                            <div className="discover--content--item--1"></div>
                            <div className="discover--content--item--1"></div>
                            <div className="discover--content--item--1"></div>
                            <div className="discover--content--item--2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discover--empty"><div className="discover--empty--inner"></div></div>
        </div>
    );
};

export default Discover;