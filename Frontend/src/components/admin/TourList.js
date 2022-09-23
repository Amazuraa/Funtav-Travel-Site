import React from "react";
import api from "../../api";

const TourList = ({ handleHide, handleFetch, handleEdit, data }) => {

     const tours = data;

     const onDelete = async (id) => {
          await api.delete('api/admin/tour/delete/' + id);
          handleFetch();
     }

     return (
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
               <div className="flex flex-wrap mt-4">
               <div className="w-full mb-12 xl:mb-0 px-4">
               <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                         <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                         <h3 className="font-semibold text-base text-blueGray-700">
                              Tour List
                         </h3>
                         </div>
                         <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                         <button
                              className="bg-blue-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={() => { handleHide(1) }}>
                              New
                         </button>
                         </div>
                    </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                    
                    <table className="items-center w-full bg-transparent border-collapse">
                         <thead>
                         <tr>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Tour Name
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Duration
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Price
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Style
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Region
                         </th>
                         <th className="px-6 bg-blueGray-50 text-center text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Status
                         </th>
                         <th className="px-6 bg-blueGray-50 text-center text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Options
                         </th>
                         </tr>
                         </thead>
                         <tbody>
                              { tours.map((val, idx) => {
                              return (
                              <tr key={idx}>
                                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        <img className=" h-16 lg:h-18 w-full object-cover" src={val.img} alt="" />
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {val.title}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {val.duration} Days
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Rp {val.price}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {val.style}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {val.region}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {(val.status == 1) ? 'Public' : 'Private'}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <button onClick={() => { handleEdit(idx); handleHide(3) }} className='px-3 py-1 mr-1 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white w-full mb-2'>Departure</button><br/>
                                        <button onClick={() => { handleEdit(idx); handleHide(2) }} className='px-3 py-1 mr-1 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white'>Edit</button>
                                        <button onClick={() => { onDelete(val.id) }} className='px-3 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white'>Del</button>
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

export default TourList