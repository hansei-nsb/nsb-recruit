import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  grade: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().gte(1, "Must be 1 and above")
  ),
  class: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().gte(1, "Must be 1 and above")
  ),
  number: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().gte(1, "Must be 1 and above")
  ),
  self_introduction: z.string(),
  motivation: z.string(),
  ability: z.string(),
  agreement: z.boolean(),
  department: z.string(),
  mbti: z.string().nullable(),
});
