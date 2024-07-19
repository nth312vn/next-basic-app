import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import LoginForm from "./components/loginForm";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-transparent ">
      <div className="flex  justify-center h-3/5 bg-transparent 	max-w-screen-lg rounded-lg shadow-2xl	">
        <div className="flex flex-col justify-center flex-1 px-8 py-12 rounded-l-lg  ">
          <div className="w-full max-w-md mx-auto">
            <h2 className="mb-6 text-3xl text-center font-bold">
              Sign in to Account
            </h2>

            <div className="mb-4 	">
              <div className="flex justify-center  space-x-2 font-bold ">
                <Button
                  variant="outline"
                  className="w-12 h-12 p-0 rounded-full hover:bg-green-500 hover:text-white"
                >
                  f
                </Button>
                <Button
                  variant="outline"
                  className="w-12 h-12 p-0 rounded-full hover:bg-green-500 hover:text-white"
                >
                  in
                </Button>
                <Button
                  variant="outline"
                  className="w-12 h-12 p-0 rounded-full hover:bg-green-500 hover:text-white"
                >
                  G
                </Button>
              </div>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or use your email account
                </span>
              </div>
            </div>

            <LoginForm />
          </div>
        </div>

        <div className="flex-1 bg-green-500 w-full h-full rounded-r-lg">
          <div className="flex flex-col justify-center h-full p-12 text-white">
            <h2 className="mb-4 text-4xl font-bold text-center">
              Hello, Friend!
            </h2>
            <p className="mb-8 text-center">
              Fill up personal information and start journey with us.
            </p>
            <div className="w-full flex justify-center">
              <Link
                href={"/register"}
                className="w-1/2 bg-green-500 rounded-full text-center py-2	border-2   text-white border-white hover:bg-white hover:text-green-500"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
