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
import { loginFormSchema } from "@/schema/loginFormSchema";
import { LoginService, setCookieService } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AxiosError } from "axios";
import ErrorMessage from "../ErrorMessage";
import useAuth from "@/hooks/useAuth";
import LoadingButton from "../LoadingButton";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    try {
      setLoading(true);
      const { accessToken, refreshToken } = await LoginService(
        values.email,
        values.password
      );
      await setCookieService(accessToken, refreshToken);
      login(accessToken, refreshToken);
      router.push("/");
    } catch (e) {
      if (e instanceof AxiosError)
        form.setError("root", { message: e.response?.data.message });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form className="space-y-4 " onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} className="w-full" />
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
        <ErrorMessage
          errorMessage={form.formState.errors.root?.message || ""}
          errorTitle="Submission Error"
        />
        <div className="w-full flex justify-center ">
          {/* <Button
            type="submit"
            className="w-1/2 mt-5 bg-green-500 hover:bg-green-600 text-white rounded-full"
          >
            Sign In
          </Button> */}
          <LoadingButton
            className="w-1/2 mt-5 bg-green-500 hover:bg-green-600 text-white rounded-full"
            loading={loading}
            type="submit"
          >
            Sign In
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
}
