import React, { useEffect, useState } from "react";
import api from "../../api";
import { useForm } from 'react-hook-form';

const RequestFormEdit = ({ handleHide, handleFetch, data}) => {

     const tourID = data.id;
     const images = {
          cultural : [
               "https://img.freepik.com/premium-photo/temple-sumatra-island-indonesia_134785-49.jpg?w=740",
               "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
               "https://images.unsplash.com/photo-1568456774218-ca9ea97e6c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ],
          explorer : [
               "https://as1.ftcdn.net/v2/jpg/01/66/43/22/1000_F_166432206_rJjEKvvQ68aBM5T7E5INHkTY1dr4NfL4.jpg",
               "https://images.unsplash.com/photo-1557093793-e196ae071479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
               "https://images.unsplash.com/photo-1531275090635-95f0974c3073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ],
          food : [
               "https://img.freepik.com/free-photo/top-view-arrangement-delicious-indonesian-bakso_23-2148933323.jpg?w=740&t=st=1663466451~exp=1663467051~hmac=dc73cd5095b0b012c52fc8b0d8645848873e550613a16ba856105642bc31e244",
               "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc3QlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
               "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          ],
          hiking : [
               "https://img.freepik.com/free-photo/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning_181624-24501.jpg?w=740&t=st=1663461853~exp=1663462453~hmac=abf09b63e13a4ce9987634ca61e7b41f8f004f70aa630d8bca73c2f6cf5a1125",
               "https://img.freepik.com/free-photo/tourist-is-watching-through-binoculars-sunny-cloudy-sky-from-mountain-top_1150-9123.jpg?w=740&t=st=1663465945~exp=1663466545~hmac=fd28e6fe6cf97318e69073ecaeb29fd501f305569ca328ce8314ea9808da41eb",
               "https://images.unsplash.com/photo-1513809491260-0e192158ae44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80"
          ],
          no_img : "https://mountainholic.com/data/file/gallery/1794564802_GrmVxJz4_4f69963f2aec263bf84140cbb0de9d5dd61fc60a.png"
     }

     const { register, handleSubmit, reset, formState: {errors} } = useForm();
     const [image, setImage] = useState(images.no_img);

     const onStyleChange = (val) => {
          let i = Math.floor(Math.random() * images.cultural.length);
          switch (val) {
               case "Cultural": setImage(images.cultural[i]); break;
               case "Explorer": setImage(images.explorer[i]); break;
               case "Food": setImage(images.food[i]); break;
               case "Hiking": setImage(images.hiking[i]); break;
               default : setImage(images.no_img); break;
          }
     };

     useEffect(() => {
          // console.log();
          let details = JSON.parse(data.details);
          onStyleChange(details.style);
          reset({
               title: "",
               style: details.style,
               duration: details.duration,
               region: "",
               group: details.group,
               price: details.budget,
               serv_insurance: 0,
               serv_food: "",
               serv_transport: "",
               serv_accommodation: details.accommodation,
          });
          
     },[])

     

     const onSubmit = async (data) => {
          let services = {
               insurance : data.serv_insurance,
               food : data.serv_food,
               transport : data.serv_transport,
               accommodation : data.serv_accommodation
          };

          let x = {
               services : JSON.stringify(services),
               img : image,
               id_req : tourID
          }

          delete data['serv_insurance'];
          delete data['serv_food'];
          delete data['serv_transport'];
          delete data['serv_accommodation'];

          let merged = {...x, ...data};

          await api.post("api/admin/tour/add/custom", merged);
          // setImage(images.no_img);

          // update parent state..
          handleHide(0);
          handleFetch();
     };

     return (
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap mt-4">
               <div className="w-full mb-12 xl:mb-0 px-4">
               <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">

                    <div className="flex justify-center">
                         <div className="w-full lg:w-9/12 bg-white pb-10 mt-16 rounded-lg lg:rounded-l-none">
                              <form onSubmit={handleSubmit(onSubmit)}>
                              <h4 className="block mb-5 text-xl text-gray-700">Add New Tour</h4>
                              <hr className=" border-dashed" />
                              <div className="mb-4 mt-8 md:grid grid-rows-6 grid-flow-col gap-3">
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                             Tour Name
                                        </label>
                                        <input
                                             {...register("title", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="title"
                                             type="text"
                                             placeholder="Journey to Lorem Ipsum"
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="type">
                                             Tour Style
                                        </label>
                                        <select
                                             {...register("style", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="style"
                                             onChange={e=>onStyleChange(e.target.value)}
                                        >
                                             <option value="">- - -</option>
                                             <option value="Cultural">Cultural</option>
                                             <option value="Explorer">Explorer</option>
                                             <option value="Food">Food Culinary</option>
                                             <option value="Hiking">Hiking and Trekking</option>
                                        </select>
                                   </div>
                                   <div className="md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="price">
                                             Duration
                                        </label>
                                        <input
                                             {...register("duration", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="duration"
                                             type="number"
                                             placeholder="3 Days"
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="type">
                                             Destination Region
                                        </label>
                                        <select
                                             {...register("region", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="region"
                                        >
                                             <option value="">- - -</option>
                                             <option value="Africa">Africa</option>
                                             <option value="Asia">Asia</option>
                                             <option value="Europe">Europe</option>
                                             <option value="North America">North America</option>
                                        </select>
                                   </div>
                                   
                                   <div className="md:mr-2 md:mb-0 row-span-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                             Tour Pict
                                        </label>
                                        <div className="bg-[#f0f8ff] border-2 border-dashed border-[#c7d4df] rounded-xl h-[140px] w-full">
                                        <div className="h-full w-full relative ">
                                             <img src={image} className="absolute object-cover h-full w-full rounded-xl hover:cursor-pointer" />
                                        </div> 
                                        </div>
                                        {/* <img src={image} className="block mb-2 text-sm font-bold text-gray-700 text-left" /> */}
                                   </div>

                                   <div className="md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="price">
                                             Maximum Group
                                        </label>
                                        <input
                                             {...register("group", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="group"
                                             type="number"
                                             placeholder="10 People"
                                        />
                                   </div>
                                   <div className="md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="price">
                                             Total Price
                                        </label>
                                        <input
                                             {...register("price", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="price"
                                             type="number"
                                             placeholder="(Rp) 1.500.000"
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="type">
                                             Insurance
                                        </label>
                                        <select
                                             {...register("serv_insurance", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="region"
                                        >
                                             <option value="1">Yes</option>
                                             <option value="0">No</option>
                                        </select>
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                             Food
                                        </label>
                                        <textarea
                                             {...register("serv_food", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="food"
                                             placeholder="Short desc about the meals included.."
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                             Transport
                                        </label>
                                        <textarea
                                             {...register("serv_transport", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="transport"
                                             placeholder="Short desc about tour's transportations.."
                                        />
                                   </div>
                                   <div className="mb-4 md:mr-2 md:-mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="name">
                                             Accommodation
                                        </label>
                                        <textarea
                                             {...register("serv_accommodation", { required : "border-red-500" })}
                                             className={"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline " + errors.prod_name?.message}
                                             id="accommodation"
                                             placeholder="Short desc about tour's accommodations.."
                                        />
                                   </div>
                                   
                              </div>
                              <div className="text-left text-sm mt-3">
                                   <button type="submit" className='px-3 py-2 mr-1 bg-blue-500 rounded-md text-slate-50'>Add Tour</button>
                                   <button type="button" onClick={() => { handleHide(0) }} className='px-3 py-2 mr-1 bg-slate-500 rounded-md text-slate-50'>Cancel</button>
                              </div>
                              </form>
                         </div>
                    </div>

               </div>
               </div>
          </div>
          </div>
     )
}

export default RequestFormEdit