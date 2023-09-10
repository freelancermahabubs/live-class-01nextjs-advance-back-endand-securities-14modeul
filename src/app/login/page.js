"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch("/api/login", config);
    const json = await res.json();
    if (json.status === true) {
      router.replace("/dashboard");
    } else {
      alert(json.message);
    }
  };

  return (
    <div className="w-1/3 my-8 mx-auto">
      <h2 className="text-xl font-semibold">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2"
          name="email"
          onChange={handleChange}
          value={formValues.email}
          placeholder="email"
          type="email"
        />
        <br />
        <input
          name="password"
          className="border-2"
          onChange={handleChange}
          value={formValues.password}
          placeholder="password"
          type="password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
