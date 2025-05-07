import * as z from "zod";

export const SignUpSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please enter a valid email" }),
    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(3, { message: "Password should be minimum of 3 characters" }),
    passwordConfirmation: z
        .string()
        .min(1, { message: "Please confirm your password" }),
}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Password do not match",
    path: ["passwordConfirmation"]
})