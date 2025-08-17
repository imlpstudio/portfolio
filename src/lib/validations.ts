import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  message: z.string().min(10).max(5000),
  website: z.string().optional(), // honeypot
});
export type ContactInput = z.infer<typeof contactSchema>;
