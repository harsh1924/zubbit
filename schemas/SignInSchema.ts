import * as z from "zod";

export const SignInSchema = z.object({
    identifier: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please enter a valid email" }),
    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(3, { message: "Password should be minimum of 3 characters" }),
})