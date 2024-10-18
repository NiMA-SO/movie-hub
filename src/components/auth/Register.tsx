import { useEffect } from "react";

const Register = () => {
  const session = localStorage.getItem("session_id");
  useEffect(() => {
    if (session) {
      location.href = "/";
    }
  }, [session]);
  return <div>Register</div>;
};

export default Register;
