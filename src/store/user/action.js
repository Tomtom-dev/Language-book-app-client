import axios from "axios"

const loginSuccess = userWithToken => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken
  };
};

export const login = (email,password) =>{
    return async (dispatch,getState)=>{
      try {

         const response = await axios.post(`http://localhost:5000/login`,{
             email,
             password
         })
        
         console.log("is it ??", email, password);
         
         dispatch(loginSuccess(response.data))
         
         dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
    } catch (error){
      if(error.response){
          console.log(error.response.data.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          console.log(error.message);
          dispatch(setMessage("danger", true, error.message));
        }
        
    }
}
}

const clearMessage = () => ({ type: "CLEAR_MESSAGE" });

const setMessage = (variant, dismissable, text) => {
  return {
    type: "SET_MESSAGE",
    payload: {
      variant,
      dismissable,
      text
    }
  };
};

const showMessageWithTimeout = (
  variant,
  dismissable,
  text,
  timeOutMilliSeconds
) => {
  return dispatch => {
    dispatch(setMessage(variant, dismissable, text));

    const timeout = timeOutMilliSeconds || "DEFAULT_MESSAGE_TIMEOUT";

    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};

// create new user

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    
    try {
      const response = await axios.post(`http://localhost:5000/signup`, {
        name,
        email,
        password,
       
      });
      console.log('search',response);
      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      ;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      
    }
  };
};