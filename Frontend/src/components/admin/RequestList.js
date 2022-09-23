import React from "react";
// import api from "../../api";

const RequestList = ({ handleHide, handleFetch, handleEdit, data }) => {

     const tours = data;
     // const user = data.user_data;

     return (
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
               <div className="flex flex-wrap mt-4">
               <div className="w-full mb-12 xl:mb-0 px-4">
               <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                         <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                         <h3 className="font-semibold text-base text-blueGray-700">
                              Custom Tour Request List
                         </h3>
                         </div>
                    </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                    
                    <table className="items-center w-full bg-transparent border-collapse">
                         <thead>
                         <tr>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              User
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Destination
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Budget
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Style
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Duration
                         </th>
                         <th className="px-6 bg-blueGray-50 text-center text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Status
                         </th>
                         <th className="px-6 bg-blueGray-50 text-center text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Option
                         </th>
                         </tr>
                         </thead>
                         <tbody>
                              { tours.map((val, idx) => {
                                   let details = JSON.parse(val.details);
                                   return (
                              <tr key={idx}>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {val.user_data.name}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {details.destination}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Rp. {details.budget}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {details.style}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {details.duration} Days
                                   </td>
                                   <td className="border-t-0 px-6 text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {(val.status == 1) ? 'New':'Processed'}
                                   </td>
                                   <td className="border-t-0 px-6 text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {(val.status == 1) ? (
                                             <button onClick={() => { handleEdit(idx); handleHide(1) }} className='px-3 py-1 mr-1 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white'>Create</button>
                                        ):'Done'}
                                   </td>
                              </tr>
                                   )
                              }) }
                         </tbody>
                    </table>
                    </div>
               </div>
               </div>
               </div>
          </div>
     )
}

export default RequestList