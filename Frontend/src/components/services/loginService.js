import axios from 'axios'
const apiURL = process.env.REACT_APP_URL + "usuarios/login";

export const loginUser = async (datos) => {
    return await axios.post(apiURL, datos );
  };