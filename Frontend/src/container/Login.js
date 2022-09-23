import React, { useState, useEffect } from "react";

import Footer from "../components/Footer.js";
import List from "../components/List.js";
import Details from "../components/Details.js";

import { Link } from "react-router-dom";

import api from "../api/index.js";
import { useForm } from 'react-hook-form';
import { Navigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { increment } from "../slice/LoginSlice.js";
import { loginSuccess } from "../slice/LoginSlice.js";
import { loginPrivilege } from "../slice/LoginSlice.js";

const Login = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  const onSubmit = async (data) => {
    let user = {
          email : data.email,
          password : data.password
    };

    await api.post("api/public/login", user)
             .then(x => {
                if (x.data.status) // login success
                {
                  let userId = x.data.data.id;
                  let admin = 'Privilege' in x.data.data;   // check for key of privilege

                  dispatch(loginPrivilege(admin));
                  dispatch(loginSuccess(userId));

                  if (admin) {
                    history("/Admin");
                    console.log("admin");
                  }
                  else {
                    history("/");
                    console.log("user");
                  }
                }

                console.log(x.data);
             });

    reset({
        email : "",
        password : ""
    });

    // handleHide(0);
  };

  return (
    <>
      <main>
        <section className="pb-20 bg-sky-200/[.3] pt-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center mt-7">

            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-white border-0">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-10">
                      <div className="text-gray-500 text-center mb-8 font-bold text-md">
                        Sign in with credentials
                        <hr className="mt-5" />
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative w-full mb-3">
                          <label
                            className="block text-left uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            {...register("email", { required : "border-red-500" })}
                            className={"w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "}
                            type="email"
                            placeholder="Email"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block text-left uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Password
                          </label>
                          <input
                            {...register("password", { required : "border-red-500" })}
                            className={"w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "}
                            type="password"
                            placeholder="Password"
                          />
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="bg-blue-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            // onClick={() => { dispatch(increment()) }}
                            // onClick={() => { dispatch(loginSuccess(1)); dispatch(loginPrivilege("yyy")) }}
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2">
                    </div>
                    <div className="w-1/2 text-right">
                      <Link to="/Register">
                        <small>Create new account</small>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login
