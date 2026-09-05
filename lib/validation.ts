import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a contact number")
    .max(24)
    .regex(/^[0-9+()\s-]{7,24}$/, "That doesn't look like a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(120).optional().or(z.literal("")),
  vehicle: z.string().trim().max(80).optional().or(z.literal("")),
  vehicleSize: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please choose a service").max(80),
  location: z.string().trim().min(2, "Please tell us where the vehicle is").max(120),
  preferredDate: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  photoCount: z.number().int().min(0).max(6).optional(),
  // honeypot — must stay empty
  company: z.string().max(0, "Rejected").optional().or(z.literal("")),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
