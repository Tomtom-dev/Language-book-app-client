import axios from "axios"

export const login = (email,password,history) =>{
    return async (dispatch,getState)=>{
      try {
         const response = await axios.post(`http://localhost:4000/login`,{
             email,
             password
         })

         dispatch(loginSuccess(response.data))
         history.push("/announce")
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