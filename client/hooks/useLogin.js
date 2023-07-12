import { useState } from "react";
import axios from "axios";

const useLogin = () => {
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
            router.push("/dashboard");
          }
        }
      }

    catch (error) {
    setErrorMessage({ name: "login", message: message });
    console.error("Error occurred while logging in:", error);
    setErrorMessage("Internal server error");
    }
  };
  return { errorMessage, isSubmitted, login };
};
export default useLogin