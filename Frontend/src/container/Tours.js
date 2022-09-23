import React, { useState, useEffect } from "react";

import Footer from "../components/Footer.js";
import List from "../components/List.js";
import Details from "../components/Details.js";

import api from "../api/index.js";

const Tours = () => {

  const [tours, setTours] = useState([]);

  const getTours = async () => {
      const res = await api.get("api/public/tour");
      // console.log(res.data.data);
      return res.data.data;
  }    

  const getAllTours = async () => {
      const all = await getTours();
      setTours(all);
  }

  useEffect(() => {
      getAllTours();
      // console.log(tours);
  }, [])

  const [showMode, setShowMode] = useState(0);
  const [editData, setEditData] = useState({});

  const changeState = (i) => setShowMode(i);
  const changeEditData = (i) => setEditData(tours[i]);

  return (
    <>
      <main>
        <section className="pb-20 bg-sky-200/[.3] pt-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center mt-7">

              {
                (() => {
                  switch(showMode) {
                        case 0: { return (<List handleHide={changeState.bind(this)}
                                                handleFetch={getAllTours.bind(this)}
                                                handleEdit={changeEditData.bind(this)}
                                                data={tours} />) } 
                          break;
                        case 1: { return (<Details handleHide={changeState.bind(this)}
                                                   handleFetch={getAllTours.bind(this)}
                                                   data={editData} />) } 
                          break;
                  }
                })()
              }

              {/* <List />
              <Details /> */}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Tours
