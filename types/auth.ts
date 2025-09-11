import { z } from "zod";

// Schema de validación para login
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Ingrese un email válido")
    .toLowerCase(),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(50, "La contraseña no puede exceder 50 caracteres"),
});

// Schema de validación para registro
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres"),
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Ingrese un email válido")
    .toLowerCase(),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(50, "La contraseña no puede exceder 50 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

// Tipos TypeScript inferidos de los schemas
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
