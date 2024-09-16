import { createContext,useEffect,useReducer} from "react";
import AuthReducer from "./AuthReducer";

//Define the first user state

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    effor: false,
};

//Manage the state globally
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    useEffect(()=> {
        localStorage.setItem("user",JSON.stringify(state.user));
    },[state.user]);

    // Function to reset auth state 
  const resetAuthState = () => { 
    dispatch({ type: "RESET" }); 
    localStorage.removeItem("user"); 
  }; 

    return(
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error: state.error,
            dispatch,
            resetAuthState,
        }}>
          {children}
        </AuthContext.Provider>
    )
}