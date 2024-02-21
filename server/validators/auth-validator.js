const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 Chars." })
    .max(255, { message: "Name must not be more than 255 char" }),

  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 Chars." })
    .max(255, { message: "Email must not be more than 255 char" }),

  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .min(10, { message: "Phone must be 10 Chars." })
    .max(15, { message: "Phone is maximun 15 char" }),

  password: z
    .string({ required_error: "Password is Required" })
    .min(6, { message: "Password must be at least of 6 Chars." })
    .max(1024, { message: "Password is maximun 1024 char" }),
});

module.exports = signupSchema;
