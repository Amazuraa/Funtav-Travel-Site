import React from "react";

const TourRequestDetail = ({ handleHide, handleFetch, handleView, data }) => {

     const req = JSON.parse(data.details);
     const req_data = data.recomendation_data;
     const req_data_services = JSON.parse(data.recomendation_data.services);

     return (
          <div className="w-full md:w-10/12 mr-auto ml-auto grid grid-cols-4 gap-8"> 
               <div className="w-full mr-auto ml-auto">
               <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl bg-sky-500">
               <img
                    alt="..."
                    src="https://img.freepik.com/free-photo/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning_181624-24501.jpg?w=740&t=st=1663461853~exp=1663462453~hmac=abf09b63e13a4ce9987634ca61e7b41f8f004f70aa630d8bca73c2f6cf5a1125"
                    className="w-full align-middle rounded-t-xl"
               />
               <blockquote className="relative p-5 mb-4">
                    <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                         height: "95px",
                         top: "-94px"
                    }}
                    >
                    <polygon
                         points="-30,95 583,95 583,65"
                         className="text-sky-500 fill-current"
                    ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                         Design Your <br/>Own Adventure!
                    </h4>
                    <p className="text-sm font-light mt-4 text-white">
                         Can't find the perfect tour? <br/>Let us curate one for you
                    </p>
                    <button type="button" onClick={() => { handleHide(1) }} className='px-5 py-2 mt-4 bg-gray-100 rounded-md text-sm text-gray-800 hover:bg-gray-200 hover:text-black'>Create Tour</button>

               </blockquote>
               </div>
               </div>

               <div className="grid col-span-3">
               <div className="grid-cols-1">
                    
                    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                         <div>
                              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                   </svg>
                              </div>
                         </div>

                         <div className="ml-6 w-2/3 text-left border-r">
                              <h2 className="font-semibold text-left">Your Custom Tour Request</h2>
                              <p className="mt-2 text-sm text-gray-500 text-left">{req.destination} - {req.duration} Days</p>

                              <hr className="mt-4 mb-4 w-72" />

                              <table className="items-center w-full bg-transparent border-collapse text-sm text-left">
                              <tbody>
                                   <tr>
                                        <th>Tour Style</th>
                                        <td>{req.style}</td>
                                   </tr>
                                   <tr>
                                        <th>Budget</th>
                                        <td>Rp. {req.budget}</td>
                                   </tr>
                                   <tr>
                                        <th>Group of People</th>
                                        <td>{req.group} People</td>
                                   </tr>
                                   <tr><th className="h-5"></th></tr>
                                   <tr>
                                        <th>Accommodation</th>
                                        <td>{req.accommodation}</td>
                                   </tr>
                                   <tr>
                                        <th>Food Reference</th>
                                        <td>{req.food}</td>
                                   </tr>
                                   <tr>
                                        <th>Medical Record</th>
                                        <td>{req.medical}</td>
                                   </tr>
                              </tbody>
                              </table>
                              <button type="button" onClick={() => { handleHide(0) }} className='px-5 py-2 mt-5 bg-blue-400 rounded-md text-sm text-white hover:bg-blue-500 hover:text-white'>
                                   Back
                              </button>
                         </div>

                         <div className="ml-6 w-2/3">
                              <h2 className="font-semibold text-left">Admin Recommendations</h2>
                              <p className="mt-2 text-sm text-gray-500 text-left">{req_data.title} - {req_data.duration} Days</p>

                              <hr className="mt-4 mb-4" />

                              <table className="items-center w-full bg-transparent border-collapse text-sm text-left">
                              <tbody>
                                   <tr>
                                        <th>Tour Style</th>
                                        <td>{req_data.style}</td>
                                   </tr>
                                   <tr>
                                        <th>Price</th>
                                        <td>Rp. {req_data.price}</td>
                                   </tr>
                                   <tr>
                                        <th>Group of People</th>
                                        <td>{req_data.group} People</td>
                                   </tr>
                                   <tr><th className="h-5"></th></tr>
                                   <tr>
                                        <th>Accommodation</th>
                                        <td>{req_data_services.accommodation}</td>
                                   </tr>
                                   <tr>
                                        <th>Meals</th>
                                        <td>{req_data_services.food}</td>
                                   </tr>
                                   <tr>
                                        <th>Insurance</th>
                                        <td>{(req_data_services.insurance == 1) ? 'Yes' : 'No'}</td>
                                   </tr>
                              </tbody>
                              </table>

                              <button type="button" onClick={() => { handleView(req_data); handleHide(3) }} className='px-5 py-2 mt-5 bg-blue-400 rounded-md text-sm text-white hover:bg-blue-500 hover:text-white'>
                                   View Tour
                              </button>
                         </div>
                    </div>

               </div>
               </div>
          </div>
     )
}

export default TourRequestDetail