import { z } from "zod";

const emailSchema = z.string().email();

export default function isEmailValid(email: string): boolean {
  try {
    emailSchema.parse(email.trim());
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return false;
    }
    throw error;
  }
}
