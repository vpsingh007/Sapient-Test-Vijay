import React, { createContext, useReducer, useEffect, useCallback } from "react";
import { ApiDataReducer } from '../reducers/ApiDataReducer';
import axios from "axios";
import { BASE_URL } from "../constant/Constant";

export const GlobalContext = createContext();
const initialState = {
  launchData: [],
  baseUrl: BASE_URL,
  launchState: false,
  landState: false
}

const GlobalContextProvider = (props) => {
  const [contextData, dispatch] = useReducer(ApiDataReducer, initialState)

  useEffect(() => {
    async function getData() {
      const response = await axios.get(contextData.baseUrl);
      dispatch({ type: "API_DATA", launchData: response.data });
    }
    getData();
    // console.log(contextData.baseUrl);
  }, [contextData.baseUrl]);

  const launchLandHandler = useCallback((paramValue, status, actionType) => {
    let newApi = `${paramValue}${status}`;
    dispatch({ type: actionType, baseUrl: newApi });
    // setBaseUrl(newApi);
  }, []);

  return (
    <GlobalContext.Provider 
      value={{
        contextData, 
        dispatch, 
        launchLandHandler
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
