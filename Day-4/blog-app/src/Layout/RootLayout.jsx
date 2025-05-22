import React, { useReducer } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import blogContext from "../context/BlogContext";

const RootLayout = () => {
  const initialState = [];

  const [blogState, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_BLOG":
        return [
          ...state,
          {
            ...action.payload,
          },
        ];

      default:
        return state;
    }
  }

  return (
    <>
      <blogContext.Provider value={{ blogState, dispatch }}>
        <div>
          <Navbar />
          <div className="w-full mt-10 px-4 flex items-center justify-center">
            <Outlet />
          </div>
        </div>
      </blogContext.Provider>
    </>
  );
};

export default RootLayout;
