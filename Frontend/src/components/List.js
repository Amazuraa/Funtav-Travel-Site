import React from "react";

const List = ({ handleHide, handleFetch, handleEdit, data }) => {

     const tours = data;

     return (
          <div className="w-full md:w-10/12 mr-auto ml-auto grid grid-cols-4 gap-8"> 
               <div className="w-full mr-auto ml-auto">
               <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl bg-white">
               
               <blockquote className="relative p-4 text-center border-b">
                    <h4 className="text-lg font-bold text-gray">
                    Sort & Filters
                    </h4>
               </blockquote>
               <blockquote className="relative p-5 mb-2 text-left border-b">
                    <h4 className="text-md mb-3 font-semibold text-gray">
                    Adventure Style
                    </h4>
                    <div class="flex items-center items-start mb-4">
                         <input aria-describedby="checkbox-1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-xl"/>
                         <label for="checkbox-1" class="text-sm ml-3 font-medium text-gray-900">Cultural</label>
                    </div>
                    <div class="flex items-center items-start mb-4">
                         <input aria-describedby="checkbox-2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-xl"/>
                         <label for="checkbox-2" class="text-sm ml-3 font-medium text-gray-900">Explorer</label>
                    </div>
                    <div class="flex items-center items-start mb-4">
                         <input aria-describedby="checkbox-3" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-xl"/>
                         <label for="checkbox-3" class="text-sm ml-3 font-medium text-gray-900">Food Culinary</label>
                    </div>
                    <div class="flex items-center items-start mb-4">
                         <input aria-describedby="checkbox-4" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-xl"/>
                         <label for="checkbox-4" class="text-sm ml-3 font-medium text-gray-900">Hiking and Trekking</label>
                    </div>
               </blockquote>

               <blockquote className="relative p-5 mb-2 text-left border-b">
                    <h4 className="text-md mb-3 font-semibold text-gray">
                    Tour Length
                    </h4>
                    <input
                    // {...register("title", { required : "border-red-500" })}
                    className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "}
                    type="number"
                    placeholder="5 Days"
                    />
               </blockquote>

               <blockquote className="relative p-5 mb-2 text-left border-b">
                    <h4 className="text-md mb-3 font-semibold text-gray">
                    Accommodation
                    </h4>
                    <div class="flex items-center items-start mb-4">
                         <input aria-describedby="acco-1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-xl"/>
                         <label for="acco-1" class="text-sm ml-3 font-medium text-gray-900">Hotel</label>
                    </div>
                    <div class="flex items-center items-start mb-4">
                         <input aria-describedby="acco-2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-xl"/>
                         <label for="acco-2" class="text-sm ml-3 font-medium text-gray-900">Logde</label>
                    </div>
                    <div class="flex items-center items-start mb-4">
                         <input aria-describedby="acco-3" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-xl"/>
                         <label for="acco-3" class="text-sm ml-3 font-medium text-gray-900">Camping</label>
                    </div>
                    <div class="flex items-center items-start mb-4">
                         <input aria-describedby="acco-4" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-xl"/>
                         <label for="acco-4" class="text-sm ml-3 font-medium text-gray-900">Villa</label>
                    </div>
                    <div class="flex items-center items-start mb-4">
                         <input aria-describedby="acco-6" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-xl"/>
                         <label for="acco-6" class="text-sm ml-3 font-medium text-gray-900">Apartment</label>
                    </div>
               </blockquote>

               <div className="mb-3"></div>
               </div>
               </div>

               <div className="grid col-span-3">
               <div className="grid-cols-1">
               { tours.map((val, idx) => {
                    return (
                    <div key={idx} class="p-4 mb-5 rounded-2xl grid grid-cols-3 gap-4 bg-white sm:flex sm:space-x-8 sm:p-4">
                         <img class="w-60 h-40 object-cover mx-auto rounded-2xl" 
                              src={val.img} alt="user avatar" height="220" width="220" loading="lazy"/>
                         <div class="space-y-4 mt-4 text-left sm:mt-0 sm:text-left">
                         <div>
                              <h6 className="text-lg font-semibold leading-none">{val.title}</h6>
                              <span className="text-xs text-gray-500">{val.style}</span>
                              <hr className="mt-4" />
                         </div>
                         <div>
                              <table className="items-center w-full bg-transparent border-collapse text-sm">
                              <tbody>
                                   <tr>
                                        <th>Tour Length</th>
                                        <td>{val.duration} Days</td>
                                   </tr>
                                   <tr>
                                        <th>Group</th>
                                        <td>{val.group} People</td>
                                   </tr>
                                   <tr>
                                        <th>Region</th>
                                        <td>{val.region}</td>
                                   </tr>
                              </tbody>
                              </table>
                         </div>
                         </div>
                         <div class="mt-4 w-100 text-left relative sm:mt-0 sm:text-left">
                              <span className="text-xs text-gray-500">Price :</span>
                              <h6 className="text-lg font-semibold leading-none">Rp. {val.price}</h6>

                              <div className="absolute bottom-0 w-full">
                                   <button className='px-3 py-2 mr-1 text-white w-full font-semibold text-sm bg-blue-400 rounded-md hover:bg-blue-500 hover:text-white'
                                           onClick={() => { handleEdit(idx); handleHide(1) }}>
                                        Details
                                   </button>
                              </div>
                         </div>
                    </div>
                    )
               }) }
               </div>
               </div>
          </div>
     )
}

export default List