import React, { useContext, useEffect, useState } from "react";
import { useAuthenticate } from "../../Hooks/useAuthenticate";
import { AuthForms } from "../forms/auth/AuthForms";
import { useRouter } from "next/router";
import { SpringLoading } from "../Loading/SpringLoading";

export const AuthLayout = ({ isSignin }) => {
  const router = useRouter();
  const user = useAuthenticate();
  const [isLoading,setIsLoading] = useState();
  useEffect(() => {
    if (user) {
      setIsLoading(true);
      router.push("/calendar");
    }
  }, [user]);
    // return <SpringLoading />
  return (
    <div className="row vh-100">
      <div className="col-8 auth-background" />
        <div className="col-4 align-items-center justify-content-center d-flex px-5 border">
          <AuthForms isLoading={isLoading} heading={isSignin ? "Signin": "Signup" } btnText={isSignin ? "Signin" : "Signup" } />
        </div>
    </div>
  );

};
