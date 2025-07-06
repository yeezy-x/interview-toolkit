import {createContext, useState, useEffect, Children} from "react"
import axiosInstance from "../utils/axiosInstance"
import { API_PATHS } from "../utils/apiPaths"

export const UserContext=createContext();

const UserProvider=({Children})=>{
  const [user, setUser]=useState(null);
  const [loading, setLoadiing]=useState(null);

  useEffect(()=>{
    if(user) return;

    const accessToken=localStorage.getItem("token");
    if(!accessToken){
      setLoadiing(false);
      return;
    }
    const fetchUser=async()=>{
        try{
          const response=await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
          setUser(response.data);
        }catch(error){
          console.error("User not authorized", error);
          clearUser();
        }finally{
          setLoadiing(false);
        }
      }
    fetchUser();
  },[])

  const updateUser=(userData)=>{
    setUser(userData);
    localStorage.setItem("token",userData.token)
    setLoadiing(false);
  }

  const clearUser=()=>{
    setUser(null);
    localStorage.removeItem("token")
  };

  return (
    <UserContext.Provider value={{user, loading, updateUser, clearUser}}>
      {Children}
    </UserContext.Provider>
  )
}

export default UserProvider;
