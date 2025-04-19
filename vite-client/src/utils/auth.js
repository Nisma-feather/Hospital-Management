import { jwtDecode } from "jwt-decode"; // ✅ Correct way for ES module


export const saveToken = (token) => {
    localStorage.setItem("token", token);
  };
  
  export const getToken = () => {
    return localStorage.getItem("token");
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
  };
  
  export const isLoggedIn = () => {
    return !!localStorage.getItem("token");
  };
  
  export const getRole=()=>{
    const token=getToken();
    if(!token) return null;
    try{
      const decoded=jwtDecode(token);
      console.log(decoded.role)
      return decoded.role;
    }
    catch(err){
      return null;
    }
  }