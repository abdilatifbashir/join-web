import axios from "axios";

// Backend URL
export const API_URL = "https://api.joinn.us/";

class Api {
  instance: any;

  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

   function getToken() {
        if (typeof localStorage) return ''
        return localStorage.getItem('token');
      }

  
}

  auth() {
    return {
      login: (data: any) => this.instance.post(`auth/tokens/`, data),
      register: (data: any) => this.instance.post(`signUp/`, data),
      profile: () => this.instance.get(`auth/profile/`),
      updateProfile: (example: any) =>
        this.instance.put(`auth/profile/${example.id}`, example),
        todos:() => this.instance.get("https://jsonplaceholder.typicode.com/todos/"),
    };
  }
  membership(){
    return {
      getMembers :() => this.instance.get(`v1/members/`),
    }
  }
  

 

  
}

export default Api;