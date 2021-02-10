import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { handleAuth } from "../../BusinessLogics/auth/handleAuth";
import { AuthContext } from "../../Contexts/AuthProvider";

export const AuthButtons = ({ tag, email, password, name, setErrors }) => {
  const {loading, setLoading} = useContext(AuthContext);
  return (
    <div>
      <span
        onClick={() =>
          handleAuth(
            { email: email.current.value, password: password.current.value, name: (tag==="Signup"?name.current.value: null) },
            tag,
            setErrors,
            setLoading
          )
        }
        className="px-5 py-3 rounded auth-button container-fluid d-flex justify-content-center bg-pink"
      >
        {tag}
      </span>
      {loading && <div>Loading....</div>}
    </div>
  );
};
