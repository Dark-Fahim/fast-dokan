import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url("${banner}")`
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 md:text-5xl text-2xl font-bold">Latest deals</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat
                    </p>
                    <button className="btn primary-bg border-0 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;