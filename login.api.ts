import * as axios from "axios";

export const Login = {
    States: {
      username: "test@domain.com",
      password: "alzm.22"
    },
    API: {
      Success: {
        run: async () => {
          console.log("test")
          let response: any = await axios.default.post("http://test", {
            username: Login.States.username,
            password: Login.States.password
          }
          );
          const body = response.data;
          console.log("body",body)
          console.log("response",response)
        },
      },
    },
  };
