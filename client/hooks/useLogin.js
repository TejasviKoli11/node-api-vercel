import { useState } from "react";
import axios from "axios";

const useLogin = () => {
<<<<<<< HEAD
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const login = async (username, password) => {
    try {
      const response = await axios.post("/login", {
        email: username,
        password: password,
      });

      const { message, body } = response.data;

      if (message === "logged in") {
        setSubmitted(true);
        if (body.user.role === "technician") {
            router.push("/uservents");
          } else {
            router.push("/technicianVentInfo");
          }
        }
      }

=======
 // const [isSubmitted, setSubmitted] = useState(false);

  const login = async (username, password) => {
    try {
      console.log(username, password);
      axios.post('http://localhost:4000/login',{
        email: username,
        password: username
      }).then((response)=>{
        console.log(response.data);
        if (message === "logged in") {
          useLogin();
            router.push("/uservents");
        } else {
          //setErrorMessage({ name: "login", message: message });
        }
      }, (error) =>{
        console.log(error);
      });
      }
>>>>>>> 21d6163d39e14b5032122671f3b0a208b8e9e350
    catch (error) {
    setErrorMessage({ name: "login", message: message });
    console.error("Error occurred while logging in:", error);
    setErrorMessage("Internal server error");
    }
  };
<<<<<<< HEAD
  return { errorMessage, isSubmitted, login };
};
export default useLogin
=======

  return { login };
};

export default useLogin;

>>>>>>> 21d6163d39e14b5032122671f3b0a208b8e9e350
