import Link from "next/link";
import { RegisterForm } from "./components/registerForm";

export default function Register() {
  return (
    <div className="flex h-4/5 bg-gray-100 max-w-screen-lg rounded-lg shadow-2xl">
      <div className="w-1/2 bg-green-500 p-12 flex flex-col justify-center items-center rounded-l-lg">
        <div>
          <h1 className="text-white text-center text-4xl font-bold mb-4">
            Welcome Back!
          </h1>
          <p className="text-white text-center text-lg">
            To keep connected with us please login with your personal info
          </p>
        </div>
        <Link
          href="/login"
          className="bg-transparent mt-10  hover:bg-white px-8 py-2 hover:text-emerald-500 text-white font-semibold  border border-white  transition duration-300 ease-in-out rounded-full"
        >
          SIGN IN
        </Link>
      </div>
      <div className="w-1/2 bg-white p-12 rounded-r-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Create Account
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
}
