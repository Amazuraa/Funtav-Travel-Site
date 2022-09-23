import React, { useState } from "react";
import api from "../../api";
import { useForm } from 'react-hook-form';


const TourDeparture = ({ handleHide, handleFetch, data }) => {

     const tourID = data.id;
     const departure_data = JSON.parse(data.departures);

     const [departure, setDeparture] = useState(departure_data);


     // console.log(departure_data);
     // console.log(data.departures);

     const { register, handleSubmit, reset, formState: {errors} } = useForm();

     const onSubmit = async (data) => {
          let dep = {
               day : data.day,
               date : data.date
          };

          setDeparture([...departure, dep]);
          let merged = {
               departures: JSON.stringify([...departure, dep])
          }; 

          // console.log([...departure, dep]);
          
          await api.put("api/admin/tour/update/departure/" + tourID, merged);

          // update parent state..
          // handleHide(0);
          handleFetch();
     };

     return (
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
               <div className="flex flex-wrap mt-4">
               <div className="w-full mb-12 xl:mb-0 px-4">
               <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                         <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                         <h3 className="font-semibold text-base text-blueGray-700">
                              Tour Departures List
                         </h3>
                         </div>
                         
                    </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <table className="items-center w-full bg-transparent border-collapse">
                         <thead>
                         <tr>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Day
                         </th>
                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Date
                         </th>
                         <th className="px-6 bg-blueGray-50 text-center text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              
                         </th>
                         </tr>
                         </thead>
                         <tbody>
                              { departure.map((val, idx) => {
                              return (
                              <tr key={idx}>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {val.day}
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {val.date}
                                   </td>
                                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                   </td>
                              </tr>
                                   )
                              }) }
                              <tr>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <input
                                             {...register("day", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "}
                                             type="text"
                                             placeholder="Sunday"
                                        />
                                   </td>
                                   <td className="border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <input
                                             {...register("date", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "}
                                             type="date"
                                             placeholder=". . ."
                                        />
                                   </td>
                                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        <button type="submit" className='px-3 py-3 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white w-full'>
                                             Submit
                                        </button>
                                   </td>
                              </tr>
                         </tbody>
                    </table>
                    </form>
                    </div>
               </div>
               </div>
               </div>
          </div>
     )
}

export default TourDeparture