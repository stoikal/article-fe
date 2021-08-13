import axios from "axios";

const API_URL = "https://tc-frontend.sebisedu.co.id/api/";

interface LoginCreds {
  identity: string;
  password: string
}

class AuthService {
  login({ identity, password }: LoginCreds) {
    return axios
      .post(API_URL + "auth/login", { identity, password })
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

  register(email: string, password: string) {
    return axios.post(API_URL + "signup", {
      email,
      password,
    });
  }
}

export default new AuthService();
