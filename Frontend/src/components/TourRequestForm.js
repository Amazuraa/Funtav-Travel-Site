import React from "react";
import { useForm } from 'react-hook-form';

import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import api from "../api";

const TourRequestForm = ({ handleHide, handleFetch }) => {

     const login = useSelector((state) => state.loginReducer.login);
     const userID = useSelector((state) => state.loginReducer.user);

     const { register, handleSubmit, reset, formState: {errors} } = useForm();

     const onSubmit = async (data) => {
          let req = {
               destination : data.destination,
               budget : data.budget,
               accommodation : data.accommodation,
               duration : data.duration,
               style : data.style,
               group : data.group,
               food : data.food,
               medical : data.medical
          };

          let x = {
               details : JSON.stringify(req),
               user : userID
          }

          await api.post("api/public/req", x);
          // console.log(x);

          handleHide(0);
          handleFetch();
     };

     if (!login) {
          return <Navigate to="/Login" replace />;
     }

     return (
          <div className="w-full md:w-10/12 mr-auto ml-auto">   
                <div class="relative">
                    <div className="p-4 px-6 w-full bg-white rounded-2xl">

                    <div className="flex justify-center">
                         <div className="w-full lg:w-9/12 bg-white pb-10 mt-16 rounded-lg lg:rounded-l-none">
                              <form onSubmit={handleSubmit(onSubmit)}>
                              <h4 className="block mb-5 text-xl text-gray-700">Custom Tour Request</h4>
                              <hr className=" border-dashed" />
                              <div className="mb-4 mt-8 md:grid grid-rows-1 gap-10">
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                            Which countries / cities / places would you like to visit?
                                        </label>
                                        <input
                                             {...register("destination", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                            //  id="title"
                                             type="text"
                                             placeholder=". . ."
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="type">
                                             How much budget do you have?
                                        </label>
                                        <input
                                             {...register("budget", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                            //  id="duration"
                                             type="number"
                                             placeholder="(Rp) xx.xxx.xxx"
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">

                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="price">
                                             Where would you like to stay?
                                        </label>
                                        <select
                                             {...register("accommodation", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                            //  id="style"
                                            //  onChange={e=>onStyleChange(e.target.value)}
                                        >
                                             <option value="">- - -</option>
                                             <option value="Hotel">Hotel</option>
                                             <option value="Stateroom">Stateroom</option>
                                             <option value="Guesthouse">Guesthouse</option>
                                             <option value="Lodge">Lodge</option>
                                             <option value="Camping">Camping</option>
                                             <option value="Resort">Resort</option>
                                             <option value="Hut">Hut</option>
                                             <option value="Villa">Villa</option>
                                             <option value="Cottage">Cottage</option>
                                             <option value="Houseboat">Houseboat</option>
                                             <option value="Apartment">Apartment</option>
                                        </select>
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="price">
                                             How long would you like to travel?
                                        </label>
                                        <input
                                             {...register("duration", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             // id="group"
                                             type="number"
                                             placeholder="10 Days"
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                            What style of adventure would you like to focus on?
                                        </label>
                                        <select
                                             {...register("style", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             // id="style"
                                            //  onChange={e=>onStyleChange(e.target.value)}
                                        >
                                             <option value="">- - -</option>
                                             <option value="Cultural">Cultural</option>
                                             <option value="Explorer">Explorer</option>
                                             <option value="Food">Food Culinary</option>
                                             <option value="Hiking">Hiking and Trekking</option>
                                        </select>
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                            How many people will go with you?
                                        </label>
                                        <input
                                             {...register("group", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             // id="group"
                                             type="number"
                                             placeholder="10 People"
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                            Do you have any foods reference / foods that you do not want?
                                        </label>
                                        <textarea
                                             {...register("food", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             // id="food"
                                             placeholder=". . ."
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                            Do you have any medical records?
                                        </label>
                                        <textarea
                                             {...register("medical", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             // id="food"
                                             placeholder=". . ."
                                        />
                                   </div>
                              </div>
                              <div className="text-left text-sm mt-7">
                                   <button type="submit" className='px-3 py-2 mr-1 bg-blue-500 rounded-md text-slate-50'>Send Request</button>
                                   <button type="button" onClick={() => { handleHide(0) }} className='px-3 py-2 mr-1 bg-slate-500 rounded-md text-slate-50'>Cancel</button>
                              </div>
                              </form>
                         </div>
                    </div>

                    </div>
                </div>
          </div>
     )
}

export default TourRequestForm