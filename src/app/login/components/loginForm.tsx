"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginFormSchema } from "../loginFormSchema";

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} className="w-full" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-full"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

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
    </Form>
  );
}
