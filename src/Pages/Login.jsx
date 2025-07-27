import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <main>
      <div className="regestration lg:flex hidden h-full grow w-1/4"></div>
      <div className="regestration grow lg:bg-none grid place-items-center relative">
        <div className="fixed top-0 left-0 bottom-0 w-full bg-black/60 lg:hidden z-10 h-screen"></div>
        <div className="relative z-20 bg-black/50 lg:bg-white  rounded-lg shadow-lg p-8 w-96">
          <div>
            <h3 className="text-3xl mb-5 text-white lg:text-black">Login</h3>
            <form className="">
              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Password" name="password" type="password" />
              <div className="mt-10 flex justify-between">
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
                <button
                  type="button"
                  className="btn flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200"
                >
                   <FcGoogle />
                  Google
                </button>
              </div>
              <p className="mt-6 text-center text-white lg:text-gray-700">
                Ro'yxatdan o'tmaganmisiz?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Ro'yxatdan o'tish
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
