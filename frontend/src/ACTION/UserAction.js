 import axios from "axios"
 import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../constants/UserConstants"

//to login and grt the token
export const login = (email, password) => async (dispatch) => {
    try {
      console.log(email);
      console.log(password );
      dispatch({ type: USER_LOGIN_REQUEST });
   //WE WANT TO SEND A HEADERS A CONTENT TYPE application/json
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }; 
  
      const { data } = await axios.post('/api/users/login', { email, password }, config);
      console.log('Login data:', data);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data, 
      });
      
   
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response && error.response.data.error ? error.response.data.error : 'Unknown error',
      });
    }
  };
  


   export const logout=(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
    dispatch({type:USER_DETAILS_RESET})
   }





   export const register = (firstName,lastName,phone,email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
   //WE WANT TO SEND A HEADERS A CONTENT TYPE application/json
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const { data } = await axios.post('/api/users/createusers',
       {firstName,lastName,phone, email, password }, 
       config);
  
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
//user data with token .when we login and regiseter we get the same 
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response &&
        error.response.data.error ?
        error.response.data.error : 'Unknown error',
      });
    }
  };


// export const register = (firstName,lastName,phone, email, password) => async (dispatch) => {
//   try {
//     dispatch({
//       type: USER_REGISTER_REQUEST,
//     })

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }

//     const { data } = await axios.post(
//       '/api/users/createusers',
//       { firstName,lastName,phone, email, password },
//       config
//     )

//     dispatch({
//       type: USER_REGISTER_SUCCESS,
//       payload: data,
//     })

//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     })

//     localStorage.setItem('userInfo', JSON.stringify(data))
//   } catch (error) {
//     dispatch({
//       type: USER_REGISTER_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }


export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    const {
      userLogin : { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    }

    const { data } = await axios.get(`/api/users/${id}`, config)
    console.log('user detail data:', data);
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateUserProfile = (userUpdateProfile) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })
//GET OUR USER INFO
    const {
      userLogin: { userInfo },
    } = getState()
//pass the token
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    }

    const { data } = await axios.put(`/api/users/profile`, userUpdateProfile, config)

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
    
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}