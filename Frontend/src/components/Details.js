import React from "react";

const Details = ({ handleHide, handleFetch, data }) => {

     const tours = data;
     const services = JSON.parse(data.services);
     const departures = JSON.parse(data.departures);

     return (
          <div className="w-full md:w-10/12 mr-auto ml-auto grid grid-cols-5 gap-8"> 
               <div className="grid col-span-3">
                    <div className="p-4 rounded-2xl bg-white sm:flex sm:space-x-8 sm:p-4 mb-5">
                         <img className="w-full h-80 object-cover mx-auto rounded-2xl" 
                              src={tours.img} alt="user avatar" height="220" width="220" loading="lazy"/>
                    </div>
                    <div className="p-5 pt-9 rounded-2xl bg-white sm:space-x-8">
                         <div className="mt-4 text-left sm:mt-0 sm:text-left">
                              <h6 className="text-xl font-semibold leading-none">Itinerary</h6>
                              <p className="text-sm mt-5">
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s
                              </p>
                              <hr className="mt-4 mb-8" />

                              <h6 className="text-xl font-semibold mb-4 leading-none">What's Included</h6>
                              <div id="accordion-collapse" data-accordion="collapse">
                                   <h2 id="accordion-collapse-heading-1">
                                        <button type="button" className="flex items-center focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 justify-between p-5 py-3 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray dark:text-white bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-gray-800">
                                             <span>Accommodation</span>
                                             <svg data-accordion-icon className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                   </h2>
                                   <div>
                                        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                                             <p className="mb-2 ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                  {services.accommodation}
                                             </p>
                                        </div>
                                   </div>
                                   <h2 id="accordion-collapse-heading-1">
                                        <button type="button" className="flex items-center focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 justify-between p-5 py-3 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray dark:text-white bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-gray-800">
                                             <span>Meals</span>
                                             <svg data-accordion-icon className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                   </h2>
                                   <div>
                                        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                                             <p className="mb-2 ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                  {services.food}
                                             </p>
                                        </div>
                                   </div>
                                   <h2 id="accordion-collapse-heading-1">
                                        <button type="button" className="flex items-center focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 justify-between p-5 py-3 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray dark:text-white bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-gray-800">
                                             <span>Transport</span>
                                             <svg className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                   </h2>
                                   <div>
                                        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                                             <p className="mb-2 ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                  {services.transport}
                                             </p>
                                        </div>
                                   </div>
                                   <h2 id="accordion-collapse-heading-1">
                                        <button type="button" className="flex items-center focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 justify-between p-5 py-3 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray dark:text-white bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-gray-800">
                                             <span>Insurance</span>
                                             <svg data-accordion-icon className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                   </h2>
                                   <div>
                                        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                                             <p className="mb-2 ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                  {(services.insurance == 1) ? "Yes" : "No"}
                                             </p>
                                        </div>
                                   </div>
                                   
                                   
                              </div>

                              <hr className="mt-4 mb-8" />
                         </div>
                    </div>
               </div>

               <div className="grid col-span-2">
                    <div className="w-full mr-auto ml-auto">
                         <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl bg-white">
                              <blockquote className="relative p-5 text-left border-b">
                                   <h4 className="text-xl font-bold text-gray">
                                        {tours.title}
                                   </h4>
                                   <span className="text-sm text-gray-500">{tours.style}</span>
                              </blockquote>

                              <blockquote className="relative p-5 text-left border-b">
                                   <table className="items-center w-full bg-transparent border-collapse text-sm text-left">
                                   <tbody>
                                        <tr>
                                             <th className="w-40">Tour Length</th>
                                             <td>{tours.duration} Days</td>
                                        </tr>
                                        <tr>
                                             <th>Group</th>
                                             <td>{tours.group} People</td>
                                        </tr>
                                        <tr>
                                             <th>Region</th>
                                             <td>{tours.region}</td>
                                        </tr>
                                   </tbody>
                                   </table>
                              </blockquote>

                              <blockquote className="relative p-5 text-left">
                                   <span className="text-sm text-gray-500">Price :</span>
                                   <h6 className="text-xl font-semibold mt-3 leading-none">Rp. {tours.price}</h6>
                              </blockquote>
                         </div>

                         <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl bg-white">
                              <blockquote className="relative p-5 text-left border-b">
                                   <h4 className="text-xl font-bold text-gray">
                                        Upcoming Departures
                                   </h4>
                              </blockquote>

                              { departures.map((val, idx) => {
                                   return (
                              <div key={idx} className="grid grid-cols-6 gap-3 p-5 text-left border-b">
                                   <div className="pt-2">
                                        <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm1 11.729l.855-.791c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.686-4.033-4.271z"/></svg>
                                   </div>
                                   <div className="col-span-3 text-left">
                                        <span className="text-sm text-gray-500">{val.day}</span>
                                        <h6 className="text-lg font-semibold leading-none">{val.date}</h6>
                                   </div>
                                   <div className="col-span-2 text-right pt-2">
                                        <button className='px-3 py-2 mr-1 text-white font-semibold text-sm bg-blue-400 rounded-md hover:bg-blue-500 hover:text-white'>Book</button>
                                   </div>
                              </div>
                                   )
                              }) }

                              <div className="mb-3"></div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Details