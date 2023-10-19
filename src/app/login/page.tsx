"use client";
import { useForm } from "react-hook-form";
import React from "react";

import login from "../../assest/login.svg";
import Image from "next/image";
import Form from "@/component/form/Form";
import Input from "@/component/form/Input";
const Login = () => {
  const onSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <section className="w-[80%] mx-auto  h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 items-center">
        <div className="">
          <Image src={login} alt="login" />
        </div>
        <div className="">
          <h1 className="text-2xl mb-2 text-accent font-bold">Login Now</h1>
          <div className="w-[80%]">
            <Form submitHandler={onSubmit}>
              <Input
                name="user.name"
                type="text"
                label="email"
                placeholder="enter your email"
              />
              <Input
                name="user.password"
                type="password"
                label="password"
                placeholder="enter your password"
              />

              <button
                className="btn btn-accent mt-2 text-white font-bold"
                type="submit"
              >
                submit now
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
