import axios, { AxiosResponse } from "axios";
import React from "react";
import { LOCAL_STORAGE_INFO, LOGIN_API_URL, REGISTER_API_URL } from "../constants/constants";
import { Name, Email, Password } from "../types/types";


export const login = async (email: Email, password: Password) => {
  const userApiData: AxiosResponse = await axios.post(
    LOGIN_API_URL,
    {
      email, password
    },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
    
  localStorage.setItem(LOCAL_STORAGE_INFO, JSON.stringify(userApiData.data));
};



export const register = async (name: Name, email: Email, password: Password) => {
  const userApiData: AxiosResponse = await axios.post(
    REGISTER_API_URL,
    {
        name, email, password,
    },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  localStorage.setItem(LOCAL_STORAGE_INFO, JSON.stringify(userApiData.data));
};
