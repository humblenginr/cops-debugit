import React, { useContext, useEffect, useState } from "react";
import { useAuthenticate } from "../../Hooks/useAuthenticate";
import { AuthForms } from "../forms/auth/AuthForms";
import { useRouter } from "next/router";
import {Spring} from "../loading/Spring"

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
  return (
    <div className="row vh-100">
      <div className="col-8 auth-background" />
      {isSignin ? (
        <div className="col-4 align-items-center justify-content-center d-flex px-5 border">
          <AuthForms heading="Signin" btnText="Signin" />
        </div>
      ) : (
        <div className="col-4 align-items-center justify-content-center d-flex px-5 border">
          <AuthForms heading="Signup" btnText="Signup" />
        </div>
      )}
    </div>
  );
};
