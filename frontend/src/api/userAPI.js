import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const userAPI = {};

userAPI.getUsers = async () => {
  return await axios.get(BASE_URL + "users/").then((response) => response.data);
};

userAPI.addUser = async (user) => {
  return await axios
    .post(BASE_URL + "users/", {
      userId: null,
      first_name: user.first_name.value,
      last_name: user.last_name.value,
      username: user.username.value,
      email: user.email.value,
    })
    .then((response) => response.data);
};

userAPI.deleteUser = async (userId) => {
  return await axios
    .delete(BASE_URL + "users/" + userId + "/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => response.data);
};

userAPI.updateUser = async (userId, user) => {
  return await axios
    .put(BASE_URL + "users/" + userId + "/", {
      first_name: user.first_name.value,
      last_name: user.last_name.value,
      username: user.username.value,
      email: user.email.value,
    })
    .then((response) => response.data);
};

export default userAPI;
