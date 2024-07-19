"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <form className="space-y-4">
      <Input type="email" placeholder="Email" className="w-full" />
      <Input type="password" placeholder="Password" className="w-full" />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Checkbox id="remember-me" className="checked:bg-blue-500 " />
          <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-green-600 hover:underline">
          Forgot Password?
        </a>
      </div>
      <div className="w-full flex justify-center ">
        <Button
          type="submit"
          className="w-1/2 mt-5 bg-green-500 hover:bg-green-600 text-white rounded-full"
        >
          Sign In
        </Button>
      </div>
    </form>
  );
}
