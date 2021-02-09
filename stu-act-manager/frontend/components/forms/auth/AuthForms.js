import React, { useRef, useState } from "react";
import { Alert, Form, FormControl } from "react-bootstrap";
import { AuthButtons } from "../../buttons/AuthButtons";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export const AuthForms = ({ heading, btnText }) => {
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const router = useRouter();
  const [errors,setErrors] = useState("");



  return (
    <Form  className="container sofia p-5">
      <div className="mb-3" style={{ fontWeight: "bold", fontSize: "50px" }}>
        {heading}
      </div>
      {heading === "Signup" ? (
        <div className="mt-5">
          <FormControl
            ref={name}
            type="email"
            placeholder="Name"
            style={{ fontWeight: "100" }}
            className="p-4"
          />
        </div>
      ) : null}
      <div className="mt-5">
        <FormControl
          ref={email}
          type="email"
          placeholder="Email"
          style={{ fontWeight: "100" }}
          className="p-4"
        />
      </div>
      <div className="mt-5">
        <FormControl
          ref={password}
          placeholder="Password"
          type="password"
          style={{ fontWeight: "100" }}
          className="p-4"
        />
      </div>
      <div className="mt-5">
        <AuthButtons
      
          email={email}
          password={password}
          name={name}
          tag={btnText}
          setErrors={setErrors}
        />
      </div>
      {errors && <Alert className="mt-3" variant="danger">{errors}</Alert>}
      {heading === "Signin" ? (
        <div className="mt-5 grey">
          Dont have an account?
          <span
            onClick={() => router.push('signup')}
            style={{ color: "black", cursor: "pointer" }}
            className="ml-2"
          >
            Signup
          </span>
        </div>
      ) : (
        <div className="mt-5 grey">
          Already have an account?{" "}
          <span
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => router.push('signin')}
          >
            Signin
          </span>
        </div>
      )}
      
    </Form>
  );
};
