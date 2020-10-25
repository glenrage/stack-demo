import axios from 'axios';
import { FETCH_PRODUCTDATA } from './types';

const API_ROOT = '/api';

// eslint-disable-next-line import/prefer-default-export
export function fetchData() {
  return (dispatch) => {
    axios.get(`${API_ROOT}/products/id/data`).then((response) => {
      dispatch({
        type: FETCH_PRODUCTDATA,
        payload: response.data,
      });
    });
  };
}
