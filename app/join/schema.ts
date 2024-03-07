import { z } from "zod";

export const formSchema = z.object({
  data: z.string().max(160, {
    message: "Data must not be longer than 160 characters.",
  }),
});
