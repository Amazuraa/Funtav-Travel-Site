import React, { useState, useEffect } from "react";

import Footer from "../components/Footer.js";

import { Link } from "react-router-dom";

import api from "../api/index.js";
import { useForm } from 'react-hook-form';

const Register = () => {

  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  const onSubmit = async (data) => {
    let user = {
          email : data.email,
          name : data.name,
          phone : data.phone,
          address : data.address,
          password : data.password
    };

    await api.post("api/public/register", user);
    console.log(user);

    reset({
        email : "",
        name : "",
        phone : "",
        address : "",
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
                        Register New Account
                        <hr className="mt-5" />
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative w-full mb-3">
                          <label className="block text-left uppercase text-gray-700 text-xs font-bold mb-2">
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
                          <label className="block text-left uppercase text-gray-700 text-xs font-bold mb-2">
                            Full Name
                          </label>
                          <input
                            {...register("name", { required : "border-red-500" })}
                            className={"w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "}
                            type="text"
                            placeholder="Name"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label className="block text-left uppercase text-gray-700 text-xs font-bold mb-2">
                            Phone
                          </label>
                          <input
                            {...register("phone", { required : "border-red-500" })}
                            className={"w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "}
                            type="number"
                            placeholder="Phone"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label className="block text-left uppercase text-gray-700 text-xs font-bold mb-2">
                            Address
                          </label>
                          <input
                            {...register("address", { required : "border-red-500" })}
                            className={"w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "}
                            type="text"
                            placeholder="Address"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label className="block text-left uppercase text-gray-700 text-xs font-bold mb-2">
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
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2">
                    </div>
                    <div className="w-1/2 text-right">
                      <Link to="/Login">
                        <small>Already have an account</small>
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

export default Register
