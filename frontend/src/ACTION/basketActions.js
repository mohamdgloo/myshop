import axios from "axios";
import { FETCH_BASKET_FAIL, FETCH_BASKET_REQUEST, FETCH_BASKET_SUCCESS } from "../constants/basketConstant";

export const fetchBasket = (user_id) => async (dispatch,getState) => {
  const { userInfo } = getState().userLogin;
  console.log('userInfo basket:', userInfo);
    try {
          dispatch({type:FETCH_BASKET_REQUEST});
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.accessToken}`,
            },
          };
          
       // const {data} = await axios.post('/api/basket/createbasket',{product_id,user_id,qty},config);
       const { data } = await axios.get('/api/basket/basket', config);

        dispatch({
            type:FETCH_BASKET_SUCCESS,
            payload:  data, 
          });
      } catch (error) {
        dispatch({
            type: FETCH_BASKET_FAIL,
            payload: error.response && error.response.data.error ?
             error.response.data.error :
             'Unknown error',
          });
    };
  };
  