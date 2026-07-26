import { z } from "zod";

export const contactSchema = z.object({
  requestType: z.enum(["quote", "sample"]),
  name: z.string().min(2, "Enter your full name"),
  company: z.string().min(2, "Enter your company name"),
  country: z.string().min(1, "Select your country"),
  dialCode: z.string().min(1),
  phone: z.string().min(5, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  products: z.array(z.string()).min(1, "Select at least one product"),
  quantity: z.string().optional(),
  packaging: z.string().optional(),
  message: z.string().max(2000).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
