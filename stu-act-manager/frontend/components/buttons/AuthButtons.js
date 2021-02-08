import React from "react";
import { Button } from "react-bootstrap";
import { handleAuth } from "../../BusinessLogics/auth/handleAuth";

export const AuthButtons = ({ tag, email, password, name, setErrors }) => {
  return (
    <div>
      <span
        onClick={() =>
          handleAuth(
            { email: email.current.value, password: password.current.value, name: (tag==="Signup"?name.current.value: null) },
            tag,
            setErrors
          )
        }
        className="px-5 py-3 rounded auth-button container-fluid d-flex justify-content-center bg-pink"
      >
        {tag}
      </span>
    </div>
  );
};
