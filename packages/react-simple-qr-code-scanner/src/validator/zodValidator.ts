import type z from "zod";

export function ZodQrCodeDataValidator<T extends z.ZodTypeAny>(
  data: unknown,
  schema: T
): z.infer<T> {
  const parsed = schema.safeParse(data);
  if (parsed.success) return parsed.data;
  throw new Error(parsed.error.issues[0].message);
}
