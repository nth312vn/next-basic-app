"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "../../schema/registerSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AxiosError } from "axios";
import { registerService } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ErrorMessage from "../ErrorMessage";

export function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      const { message } = await registerService({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      toast.success(message);
      router.push("/login");
    } catch (e) {
      if (e instanceof AxiosError)
        form.setError("root", { message: e.response?.data.message });
    }
  };
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="name"
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded"
                />
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
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm password"
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <ErrorMessage
          errorMessage={form.formState.errors.root?.message || ""}
          errorTitle="Submission Error"
        />
        <div className=" w-full flex justify-center">
          <Button
            type="submit"
            className="w-1/2 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4  transition duration-300 ease-in-out"
          >
            SIGN UP
          </Button>
        </div>
      </form>
    </Form>
  );
}
