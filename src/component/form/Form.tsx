"use client";
import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

const Form = ({ children, submitHandler, defaultValues }: any) => {
  const methods = useForm({ defaultValues });
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
