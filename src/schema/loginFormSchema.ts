import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .email("Invalid email address"),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});
