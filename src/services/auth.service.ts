import axios from "axios";
import CONFIG from "../app/config";

const API_URL = CONFIG.BASE_URL;

export interface LoginCreds {
  identity: string;
  password: string
}

export interface RegisterCreds {
  email: string;
  password: string;
  role: 'visitor'
}

class AuthService {
  login(payload: LoginCreds) {
    return axios
      .post(API_URL + "auth/login", payload)
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(payload: RegisterCreds) {
    return axios.post(API_URL + "auth/register", payload);
  }
}

export default new AuthService();
