import { useState } from "react";
import axios from "axios";

const useLogin = () => {
 // const [isSubmitted, setSubmitted] = useState(false);

<<<<<<< HEAD
  const login = async (username, password) => {
    try {
=======
  const login = async (email, password) => {
    try {
<<<<<<< HEAD
      const response = await axios.post("/login", {
        email: email,
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
=======
>>>>>>> bcf069c950cab71f9c2771561ef9ab410d977fa4
      console.log(username, password);
      axios.post('http://localhost:4000/login',{
        email: username,
        password: username
      }).then((response)=>{
        console.log(response.data.body.token);
        if (message === "logged in") {
          useLogin();
          localStorage.setItem('token', response.data);
            router.push("/dashboard");
        } else {
          //setErrorMessage({ name: "login", message: message });
>>>>>>> b62f3d74456cf8e17e1019c49c99c906e06baac5
        }
      }, (error) =>{
        console.log(error);
      });
      }
    catch (error) {
    setErrorMessage({ name: "login", message: message });
    console.error("Error occurred while logging in:", error);
    setErrorMessage("Internal server error");
    }
  };

  return { login };
};

export default useLogin;

<<<<<<< HEAD
=======
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
>>>>>>> bcf069c950cab71f9c2771561ef9ab410d977fa4
