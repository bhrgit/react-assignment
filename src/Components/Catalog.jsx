// import ProgData from './ProgData';
// import React, { useState } from 'react';





const Catalog = ( ) => {
    // console.log({tech.name}); // 
    


    return (       
            <div>
                {/* {tech.map((t) => {
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
                                
                                <div className="mt-2">
                                <button onClick={() => handleSelectStack(t.id)} 
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
            
            
        )} */}
            </div>
        )}  


;


export default Catalog;







            

        