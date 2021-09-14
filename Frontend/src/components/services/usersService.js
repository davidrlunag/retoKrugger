import axios from 'axios'
const apiURL = process.env.REACT_APP_URL + "usuarios";
//const apiURL = process.env.REACT_APP_BASE_URL+'/users'

export const getUsuarios = async () => {
  return await axios.get(apiURL );
};

export const modifyUserProfile = async (user) => {
  return await axios.put(apiURL +"/", user);
};

