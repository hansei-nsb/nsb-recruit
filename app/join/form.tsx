"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

import { formSchema } from "./schema";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Textarea } from "@/components/ui/textarea";

export default function JoinForm({
  formdata,
  formaction,
}: {
  formdata: any;
  formaction: any;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      data: formdata.length != 0 ? formdata[0].data : "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="space-y-8"
        // @ts-ignore
        action={form.handleSubmit(formaction)}
      >
        <FormField
          control={form.control}
          name="data"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
