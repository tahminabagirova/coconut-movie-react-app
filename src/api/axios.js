import axios from "axios";
import Swal from "sweetalert2";
let headers;
let baseURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "https://api.themoviedb.org";
} else if (process.env.NODE_ENV === "production") {
  baseURL = "https://api.themoviedb.org";
}

try {
  headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
} catch (e) {}

const ApiService = axios.create({
  baseURL,
  timeout: 0,
  headers: headers,
});

ApiService.interceptors.request.use(
  function (config) {
    if (localStorage.token) {
      // add token to request headers31
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
    }
    config.headers["Language"] = sessionStorage.getItem("locale");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

ApiService.interceptors.response.use(
  function (response) {
    return response;
  },
  (error) => {
    Swal.fire(error.response.data.message, "", "error");
    return Promise.reject(error);
  }
);

export default ApiService;