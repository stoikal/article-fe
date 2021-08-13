import axios from "axios";

const API_URL = "https://tc-frontend.sebisedu.co.id/api/";

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
        if (response.data.access_Token) {
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
