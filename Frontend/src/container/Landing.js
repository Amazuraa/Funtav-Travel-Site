import React from "react";

import Footer from "../components/Footer.js";

export default function Landing() {
  return (
    <>
      <main>
        <section className="pb-20 bg-sky-200/[.3] pt-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center mt-7">

              {/* Search bar */}
              <div className="w-full md:w-10/12 mr-auto ml-auto">   
                <div class="relative">
                    <div className="p-4 px-6 w-full grid grid-cols-3 gap-6 bg-white rounded-2xl">
                      <div className="flex inset-y-0 left-0 items-center border-r-2 pr-2">
                        <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 12c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z"/></svg>
                        <input type="search" className=" p-4 pl-5 w-full text-md text-gray-500 bg-white rounded-lg border border-none" placeholder="Where to?"/>
                      </div>
                      <div className="flex inset-y-0 left-0 items-center pr-2 pl-3">
                        <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"> <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/> <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/> </svg>
                        <select className=" p-4 pl-5 w-full text-md text-gray-500 bg-white rounded-lg border border-none">
                          <option>All Adventures</option>
                          <option>Group Adventures</option>
                          <option>Private Adventures</option>
                        </select>
                      </div>
                      <button type="button" class="text-white right-2.5 bottom-2.5 rounded-xl bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </div>
              </div>

              {/* Categories */}
              <div className="w-full md:w-10/12 mr-auto ml-auto grid grid-cols-2 gap-8 pt-14"> 
                <div className="w-full mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl bg-sky-500">
                    <img
                      alt="..."
                      // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                      src="https://img.freepik.com/free-photo/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning_181624-24501.jpg?w=740&t=st=1663461853~exp=1663462453~hmac=abf09b63e13a4ce9987634ca61e7b41f8f004f70aa630d8bca73c2f6cf5a1125"
                      className="w-full align-middle rounded-t-xl"
                    />
                    <blockquote className="relative p-8 mb-4">
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
                      <h4 className="text-2xl font-bold text-white">
                        Adventure Awaits
                      </h4>
                      <p className="text-sm font-light mt-4 text-white">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s
                      </p>
                    </blockquote>
                  </div>
                </div>

                <div className="w-full h-[495px] mr-auto ml-auto snap-y scroll-smooth overflow-y-auto">
                  <section class="overflow-hidden text-gray-700">
                    <div class="container">
                      <div class="grid grid-cols-2 gap-3 mr-3 mb-7">

                        <div className="relative w-full mr-3 mb-4 min-w-0 break-words bg-white w-full shadow-lg rounded-2xl bg-white">
                          <img
                            alt="..."
                            src="https://img.freepik.com/free-photo/tourist-is-watching-through-binoculars-sunny-cloudy-sky-from-mountain-top_1150-9123.jpg?w=740&t=st=1663465945~exp=1663466545~hmac=fd28e6fe6cf97318e69073ecaeb29fd501f305569ca328ce8314ea9808da41eb"
                            className="w-full align-middle rounded-t-2xl p-2 rounded-2xl"
                          />
                          <blockquote className="relative p-3">
                            <h4 className="text-lg font-bold text-gray-600 font-sans">Hiking and Trekking</h4>
                          </blockquote>
                        </div>

                        <div className="relative w-full mr-3 mb-4 min-w-0 break-words bg-white w-full shadow-lg rounded-2xl bg-white">
                          <img
                            alt="..."
                            src="https://as1.ftcdn.net/v2/jpg/01/66/43/22/1000_F_166432206_rJjEKvvQ68aBM5T7E5INHkTY1dr4NfL4.jpg"
                            className="w-full align-middle rounded-t-2xl p-2 rounded-2xl"
                          />
                          <blockquote className="relative p-3">
                            <h4 className="text-lg font-bold text-gray-600 font-sans">Explorer</h4>
                          </blockquote>
                        </div>

                        <div className="relative w-full mr-3 mb-4 min-w-0 break-words bg-white w-full shadow-lg rounded-2xl bg-white">
                          <img
                            alt="..."
                            src="https://img.freepik.com/premium-photo/temple-sumatra-island-indonesia_134785-49.jpg?w=740"
                            className="w-full align-middle rounded-t-2xl p-2 rounded-2xl"
                          />
                          <blockquote className="relative p-3">
                            <h4 className="text-lg font-bold text-gray-600 font-sans">Cultural</h4>
                          </blockquote>
                        </div>

                        <div className="relative w-full mr-3 mb-4 min-w-0 break-words bg-white w-full shadow-lg rounded-2xl bg-white">
                          <img
                            alt="..."
                            src="https://img.freepik.com/free-photo/top-view-arrangement-delicious-indonesian-bakso_23-2148933323.jpg?w=740&t=st=1663466451~exp=1663467051~hmac=dc73cd5095b0b012c52fc8b0d8645848873e550613a16ba856105642bc31e244"
                            className="w-full align-middle rounded-t-2xl p-2 rounded-2xl"
                          />
                          <blockquote className="relative p-3">
                            <h4 className="text-lg font-bold text-gray-600 font-sans">Food Culinary</h4>
                          </blockquote>
                        </div>

                      </div>
                    </div>
                  </section>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20 pb-48">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-bold text-gray-600">
                  Recommended Destinations
                </h2>
              </div>
            </div>
            <div className="w-full md:w-10/12 mr-auto ml-auto grid grid-cols-3 gap-8 pt-14"> 
              <div className="w-full mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl bg-sky-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="w-full align-middle rounded-t-xl"
                  />
                  <blockquote className="relative p-8 mb-4">
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
                    <h4 className="text-2xl font-bold text-white">
                      Adventure Awaits
                    </h4>
                    <p className="text-sm font-light mt-4 text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl bg-sky-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1557093793-e196ae071479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="w-full align-middle rounded-t-xl"
                  />
                  <blockquote className="relative p-8 mb-4">
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
                    <h4 className="text-2xl font-bold text-white">
                      Adventure Awaits
                    </h4>
                    <p className="text-sm font-light mt-4 text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl bg-sky-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1568456774218-ca9ea97e6c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="w-full align-middle rounded-t-xl"
                  />
                  <blockquote className="relative p-8 mb-4">
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
                    <h4 className="text-2xl font-bold text-white">
                      Adventure Awaits
                    </h4>
                    <p className="text-sm font-light mt-4 text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center justify-center pt-14">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-bold text-gray-600">
                  Around the World
                </h2>
              </div>
            </div>

            <div className="w-full md:w-10/12 mr-auto ml-auto grid grid-cols-4 gap-8 pt-14"> 
              <div className="relative w-full mr-3 mb-4 min-w-0 break-words bg-white w-full shadow-lg rounded-2xl bg-white">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1531275090635-95f0974c3073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="w-full h-[100px] object-cover align-middle rounded-t-2xl p-2 rounded-2xl"
                />
                <blockquote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h4 className="text-2xl font-bold text-white font-sans">Europe</h4>
                </blockquote>
              </div>

              <div className="relative w-full mr-3 mb-4 min-w-0 break-words bg-white w-full shadow-lg rounded-2xl bg-white">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1594903717106-6f02e8db45f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="w-full h-[100px] object-cover align-middle rounded-t-2xl p-2 rounded-2xl"
                />
                <blockquote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h4 className="text-2xl font-bold text-white font-sans">Asia</h4>
                </blockquote>
              </div>

              <div className="relative w-full mr-3 mb-4 min-w-0 break-words bg-white w-full shadow-lg rounded-2xl bg-white">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1513809491260-0e192158ae44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80"
                  className="w-full h-[100px] object-cover align-middle rounded-t-2xl p-2 rounded-2xl"
                />
                <blockquote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h4 className="text-2xl font-bold text-white font-sans">North America</h4>
                </blockquote>
              </div>

              <div className="relative w-full mr-3 mb-4 min-w-0 break-words bg-white w-full shadow-lg rounded-2xl bg-white">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1566296524462-e0a341bf65e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  className="w-full h-[100px] object-cover align-middle rounded-t-2xl p-2 rounded-2xl"
                />
                <blockquote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h4 className="text-2xl font-bold text-white font-sans">Africa</h4>
                </blockquote>
              </div>
            </div>
          </div>

          
        </section>

        <section className="relative block bg-sky-600/[.8]">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-sky-600/[.8] fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Adventures For Everyone
                </h2>
                <p className="text-md leading-relaxed mt-5 mb-4 text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry standard dummy text ever since 1500s
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-16 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-16 h-16 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5/6" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/> </svg>
                </div>
                <h6 className="text-2xl mt-5 mb-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <hr/>
                <p className="mt-7 mb-4 text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since 1500s
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-16 h-16 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5/6" fill="currentColor" viewBox="0 0 16 16"> <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/> <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> </svg>
                </div>
                <h5 className="text-2xl mt-5 mb-5 font-semibold text-white">
                  Travel Insurance
                </h5>
                <hr/>
                <p className="mt-7 mb-4 text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since 1500s
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-16 h-16 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5/6" fill="currentColor" viewBox="0 0 16 16"> <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/> </svg>
                </div>
                <h5 className="text-2xl mt-5 mb-5 font-semibold text-white">
                  24/7 Customer Support
                </h5>
                <hr/>
                <p className="mt-7 mb-4 text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since 1500s
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
