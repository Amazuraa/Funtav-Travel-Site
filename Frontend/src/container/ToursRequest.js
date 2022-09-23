import React, { useState, useEffect } from "react";

import Footer from "../components/Footer.js";
import TourRequestForm from "../components/TourRequestForm.js";
import TourRequestList from "../components/TourRequestList.js";
import TourRequestDetail from "../components/TourRequestDetail.js";
import Details from "../components/Details.js";

import { useSelector, useDispatch } from "react-redux";

import api from "../api/index.js";

const ToursRequest = () => {

  const userID = useSelector((state) => state.loginReducer.user);

  const [tours, setTours] = useState([]);

  const getTours = async () => {
      const res = await api.get("api/public/req/user/" + userID);
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
  const [viewData, setViewData] = useState({});

  const changeState = (i) => setShowMode(i);
  const changeEditData = (i) => setEditData(tours[i]);
  const changeViewData = (i) => setViewData(i);

  return (
    <>
      <main>
        <section className="pb-20 bg-sky-200/[.3] pt-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center mt-7">

              {
                (() => {
                  switch(showMode) {
                        case 0: { return (<TourRequestList handleHide={changeState.bind(this)}
                                                           handleFetch={getAllTours.bind(this)}
                                                           handleEdit={changeEditData.bind(this)}
                                                           data={tours} />) } 
                          break;
                        case 1: { return (<TourRequestForm handleHide={changeState.bind(this)}
                                                           handleFetch={getAllTours.bind(this)} />) } 
                          break;
                        case 2: { return (<TourRequestDetail handleHide={changeState.bind(this)}
                                                             handleFetch={getAllTours.bind(this)}
                                                             handleView={changeViewData.bind(this)}
                                                             data={editData} />) } 
                          break;
                        case 3: { return (<Details handleHide={changeState.bind(this)}
                                                    handleFetch={getAllTours.bind(this)}
                                                    data={viewData} />) } 
                          break;
                  }
                })()
              }

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ToursRequest