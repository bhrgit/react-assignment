import React from 'react';

const Catalog = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology Catalog</h2>
            <p className="text-gray-600">Browse our collection of technologies and tools.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {/* Catalog items would go here */}
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-bold text-gray-800">Technology 1</h3>
                    <p className="text-gray-600">Description of technology 1.</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-bold text-gray-800">Technology 2</h3>
                    <p className="text-gray-600">Description of technology 2.</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-bold text-gray-800">Technology 3</h3>
                    <p className="text-gray-600">Description of technology 3.</p>
                </div>
            </div>
        </div>
    );
};

export default Catalog;