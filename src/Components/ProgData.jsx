import React, { use } from 'react';
// import Catalog from './Catalog';

const ProgData = ({ progDataPromise }) => {
        const tech = use(progDataPromise);
        // console.log('Fetched programming data:', tech); // Debugging line to check the fetched data
        const [isSelected, setIsSelected] = React.useState(false);
        const handleSelectStack = () => {
        setIsSelected(!isSelected)
        };

        return (
            <div >
            {/* <Catalog tech={tech} /> */}

            <div className= "m-8 p-8 bg-white rounded shadow"> 
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore the Technologies</h2>
                <p className="text-gray-600">Pick one technology per category to build your ideal stack.</p>
            </div>


            <div className="flex flex-col md:flex-row gap-4 m-8">            

            <div className="w-3/4 flex flex-row gap-4">              
            
            <div className="grid grid-cols-3  gap-4 m-1 p-1 bg-gray-100 rounded shadow">

                {tech.map((t) => {
                    // console.log('Rendering program:', t.name); // Debugging line to check each program being rendered
                    return (
                        <div key={t.id} >                        

                        
                <div >
                    <div>
                        <div key={t.id} className="bg-white p-4 rounded shadow">
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                <img src={t.icon} alt={t.name} className="w-8 h-8 " />
                                <span className="badge badge-sm badge-info">{t.badge}</span>
                                
                            </div>
                            
                            <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                            <p className="text-gray-600">{t.description}</p>
                            
                            <div key={t.id} className="flex justify-between gap-1 mt-2">
                                <span className="badge badge-md badge-warning text-balance">{t.category}</span>
                                <span className="badge badge-md badge-warning text-balance">{t.difficulty}</span>
                                <span className="badge badge-xs badge-soft">{t.rating}</span>
                            </div>

                            <div>
                                
                                    
                                
                                <div key={t.id} className="mt-2">
                                <button onClick={() => handleSelectStack()} 
                                className="btn btn-sm btn-block bg-black text-white transition-all hover:scale-105">
                                {isSelected === true ? "Added" : "Add to Stack"}
                                </button>
                            
                                </div>
                            </div>
                        </div>                           
                        
                    </div>
                </div>

                    

                   
                
                
            </div>
            )}
            
            
        )}
        </div>
            </div>

            <div className="w-1/4 flex flex-col mt-2">
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="text-lg font-semibold text-gray-800">Your Stack</h3>
                            <p className="text-gray-600">Your selected technologies will appear here.</p>
                        </div>
            </div>

            </div>


        </div>
    )}
   ;

export default ProgData



