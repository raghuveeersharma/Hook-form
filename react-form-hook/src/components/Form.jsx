import React from "react";

import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
    reset();
  };

  return (
    <div>
      <form
        className="mt-11 p-4 w-80 m-auto shadow-lg shadow-gray-500/50 grid gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isSubmitting && <p>Loading...</p>}
        <h1 className=" text-2xl">Form</h1>
        <hr />
        <div>
          {" "}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("Username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Username must be at most 10 characters",
                },
              })}
            />
          </label>
          {errors.Username && (
            <span className="text-red-500">{errors.Username.message}</span>
          )}
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email")}
            />
          </label>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be at most 20 characters",
                },
              })}
            />
          </label>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className=" text-white flex justify-center border rounded w-20 m-auto bg-blue-500 shadow-2xl shadow-blue-500/50">
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
