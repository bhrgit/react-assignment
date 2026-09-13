
// import React from 'react';
import heroImg from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <div className="flex justify-between  bg-gray-100 p-8" style={{ marginLeft: '32px', marginRight: '32px', paddingLeft: '32px', paddingRight: '32px' }}>
            <div className="flex flex-col justify-center left mt-4">
                <h1 className="text-4xl font-bold text-gray-800">Build Your Ideal <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-purple-500">Development Stack</span></h1>
                <p className="text-lg text-gray-600 mt-2">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div className="flex space-x-4">
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Explore Technologies</button>
                <button className="mt-4 px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Learn More</button>
                </div>
            </div>

            <div>
            <img src={heroImg} alt="Hero Image" className="w-full h-auto" />
            </div>
            
        
        </div>
    );
};

export default Hero;