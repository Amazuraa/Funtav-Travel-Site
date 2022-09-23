import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import api from "../api";

import Sidebar from "../components/admin/Sidebar";

import RequestList from "../components/admin/RequestList";
import RequestFormEdit from "../components/admin/RequestFormEdit";

import TourList from "../components/admin/TourList";
import TourForm from "../components/admin/TourForm";
import TourFormEdit from "../components/admin/TourFormEdit";

const DashboardRequest = () => {
  const login = useSelector((state) => state.loginReducer.login);
  const prev = useSelector((state) => state.loginReducer.privilege);

  const [tours, setTours] = useState([]);

  const getTours = async () => {
      const res = await api.get("api/admin/req");
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

  if (!login && !prev) {
    return <Navigate to="/Login" replace />;
  }

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="relative bg-sky-600 md:pt-24 pb-32 pt-12"></div>

        {
          (() => {
            switch(showMode) {
                  case 0: { return (<RequestList handleHide={changeState.bind(this)} 
                                                 handleFetch={getAllTours.bind(this)}
                                                 handleEdit={changeEditData.bind(this)}
                                                 data={tours} />) } 
                    break;
                  // case 1: { return (<TourForm handleHide={changeState.bind(this)}
                  //                             handleFetch={getAllTours.bind(this)} />) } 
                  //   break;
                  case 1: { return (<RequestFormEdit handleHide={changeState.bind(this)}
                                                     handleFetch={getAllTours.bind(this)}
                                                     data={editData} />) } 
                    break;
            }
          })()
        }
      </div>
    </>
  );
}

export default DashboardRequest
