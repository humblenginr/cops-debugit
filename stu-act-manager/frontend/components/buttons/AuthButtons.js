import React, { useContext } from "react";
import { Button, Spinner } from "react-bootstrap";
import { handleAuth } from "../../BusinessLogics/auth/handleAuth";
import { AuthContext } from "../../Contexts/AuthProvider";

export const AuthButtons = ({ tag, email, password, name, setErrors }) => {
  const {loading, setLoading} = useContext(AuthContext);
  return (
    <div>
       {loading ? <Spinner animation="border" size="sm" style={{zIndex: "200",color:"white", }} className="position-absolute mt-3 ml-5"/> : null}
      <span
        onClick={() =>
          handleAuth(
            { email: email.current.value, password: password.current.value, name: (tag==="Signup"?name.current.value: null) },
            tag,
            setErrors,
            setLoading
          )
        }
        className="px-5 py-3 rounded auth-button container-fluid d-flex justify-content-center bg-pink postition-relative"
      >
        {tag}
      </span>
      
    </div>
  );
};
