import axios from "axios";
export const loginCall = async(user, dispatch) =>{
    dispatch({type: "LOGIN_START"});
    try{
      const response = await axios.post("auth/login",user);
      dispatch({type: "LOGIN_SUCCESS", payload: response.data})
    }catch(err) {
      const errorMessage = err.response?.data?.message ||err.message || "ログインに失敗しました。";
      dispatch({type: "LOGIN_ERROR", payload: errorMessage});
    }
};