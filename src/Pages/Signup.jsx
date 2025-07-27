import React, { useState } from "react";
import FormInput from "../components/FormInput";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Signup() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (!formData.get("displayName")) {
      alert("Display Name maydonini to'ldiring!");
      return;
    }
    if (!formData.get("email")) {
      alert("Email maydonini to'ldiring!");
      return;
    }
    if (!formData.get("password")) {
      alert("Password maydonini to'ldiring!");
      return;
    }
    if (!formData.get("confirmPassword")) {
      alert("Confirm Password maydonini to'ldiring!");
      return;
    }

    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (password !== confirmPassword) {
      setError("Parollar mos kelmayapti!");
      return;
    }

    setError("");
    console.log(displayName, email, password);
  };

  return (
    <main>
      <div className="regestration lg:flex hidden h-full grow"></div>
      <div className="form-container flex-1 grid place-items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl mb-6 text-center text-gray-800">Signup</h3>

          <FormInput label="Display Name" name="displayName" type="text" />
          <FormInput label="Email" name="email" type="email" />
          <FormInput label="Password" name="password" type="password" />
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <div className="mt-8 flex justify-between items-center">
            <button type="submit" className="btn btn-primary px-6 py-2">
              Signup
            </button>
            <button
              type="button"
              className="btn flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
            >
              <FcGoogle size={20} />
              Google
            </button>
           
          </div>
          <p className="mt-6 text-center text-gray-600">
            Ro'yxatdan o'tganmisiz?
            <Link to="/login" className="text-blue-600 ml-[50px] hover:underline">
            Kirish
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Signup;
