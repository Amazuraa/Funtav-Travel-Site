import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slice/LoginSlice";

import logo from '../assets/img/logo3.png';

const Nav = () => {

     const dispatch = useDispatch();

     const [mobMenu, setMobMenu] = useState("hidden");
     const menuClick = () => {
          if (mobMenu != "") setMobMenu("");
          else setMobMenu("hidden");
     }

     const count = useSelector((state) => state.loginReducer.value);
     const user = useSelector((state) => state.loginReducer.user);
     const login = useSelector((state) => state.loginReducer.login);
     const prev = useSelector((state) => state.loginReducer.privilege);

     return (
          <div className="flex flex-col">
               <nav className="flex justify-around bg-white pb-1 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">

               <div className="flex items-center">
                    <Link to="/">
                    <span className="cursor-pointer">
                         <img
                            alt="..."
                            src={logo}
                            className="w-full rounded-2xl"
                          />
                    </span>
                    </Link>
               </div>

               <div className="items-center hidden w-96 sm:w-80 lg:flex sm:flex"></div>

               <div className="hidden md:flex items-center space-x-6 text-lg">
                    {/* Test = {count} 
                    User = {user}
                    Prev = {prev} */}

                    <Link to="/Tours">
                    <span className="flex text-gray-600 hover:text-blue-500
                         cursor-pointer transition-colors duration-300 text-base">
                         Tours
                    </span>
                    </Link>

                    {prev ? (
                         <Link to="/Admin">
                         <span className="flex text-gray-600 hover:text-blue-500
                              cursor-pointer transition-colors duration-300 text-base">
                              Admin
                         </span>
                         </Link>
                    ):(
                         <Link to="/ToursRequest">
                         <span className="flex text-gray-600 hover:text-blue-500
                              cursor-pointer transition-colors duration-300 text-base">
                              Request
                         </span>
                         </Link>
                    )}

                    {login ? (
                         <button onClick={() => { dispatch(logout()) }}>
                              <span className="flex relative text-gray-600 hover:text-blue-500
                                   cursor-pointer transition-colors duration-300 text-base">
                                   <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z"/></svg>
                              </span>
                         </button>
                    ):(
                         <Link to="/Login">
                         <span className="flex relative text-gray-600 hover:text-blue-500
                              cursor-pointer transition-colors duration-300 text-base">
                              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M8 10v-5l8 7-8 7v-5h-8v-4h8zm2-8v2h12v16h-12v2h14v-20h-14z"/></svg>
                         </span>
                         </Link>
                    )}
                    
               </div>
               </nav>
          </div>
     )
}

export default Nav