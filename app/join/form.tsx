"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input, InputWithText } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

import { updateJoinForms } from "@/utils/auth-helpers/server";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  grade: z.coerce
    .number({ invalid_type_error: "필수 입력사항입니다." })
    .gte(1, "1 이상의 숫자를 입력해주세요.")
    .lte(3, "3 이하의 숫자를 입력해주세요."),
  class: z.coerce
    .number({ invalid_type_error: "필수 입력사항입니다." })
    .gte(1, "1 이상의 숫자를 입력해주세요."),
  number: z.coerce
    .number({ invalid_type_error: "필수 입력사항입니다." })
    .gte(1, "1 이상의 숫자를 입력해주세요."),
  name: z.string({ required_error: "이름을 입력해주세요." }),
  department: z.string({ required_error: "학과를 선택해주세요" }),
  self_introduction: z.string({ required_error: "필수 입력사항입니다." }),
  motivation: z.string({ required_error: "필수 입력사항입니다." }),
  ability: z.string({ required_error: "필수 입력사항입니다." }),
  mbti: z.string().optional().nullable(),
  // agreement boolean, true가 아니면 submit 못하게 막기
  agreement: z.boolean().refine((val) => val === true, {
    message: "Please read and accept the terms and conditions",
  }),
});

export default function JoinForm({ formdata }: { formdata: any }) {
  // export default function JoinForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...formdata[0],
    },
  });

  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const formdataWithoutId = { ...formdata[0] };
    delete formdataWithoutId.id;
    delete formdataWithoutId.user_id;
    delete formdataWithoutId.created_at;

    let formdataWithoutId_sort = Object.keys(formdataWithoutId)
      .sort() // @ts-ignore
      .reduce((obj, key) => ((obj[key] = formdataWithoutId[key]), obj), {});

    let values_sort = Object.keys(values)
      .sort() // @ts-ignore
      .reduce((obj, key) => ((obj[key] = values[key]), obj), {});

    if (JSON.stringify(formdataWithoutId_sort) == JSON.stringify(values_sort)) {
      console.log("same");

      toast({
        title: "변경 사항이 없습니다.",
      });
      setIsSubmitting(false);
    } else {
      console.log("different");
      updateJoinForms(values);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input
                    placeholder="
                성을 포함한 실명을 입력해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row space-x-4">
            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithText
                      placeholder="1~3 사이의 숫자"
                      text="학년"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithText
                      placeholder="1, 2, ..."
                      text="반"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithText
                      placeholder="1, 2, ..."
                      text="번"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>전공학과</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="자신의 전공학과를 선택해주세요." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="cs">클라우드보안과</SelectItem>
                  <SelectItem value="mg">메타버스게임과</SelectItem>
                  <SelectItem value="ns">네트워크보안과</SelectItem>
                  <SelectItem value="hs">해킹보안과</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="self_introduction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>자기 소개</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-nformdataWithoutId"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>지원 동기</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-nformdataWithoutId"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>자기 역량</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-nformdataWithoutId"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mbti"
          render={({ field }) => (
            <FormItem>
              <FormLabel>MBTI</FormLabel>
              <FormControl>
                <Input
                  placeholder="INFJ? ESTJ? 당신의 MBTI를 적어주세요."
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormDescription>
                재미를 위해서 수집하고 있어요. 기입하지 않으셔도 됩니다.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value === true}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-nformdataWithoutId">
                <FormLabel>기능경기대회 참여에 동의하십니까?</FormLabel>
                <FormDescription>
                  기능경기대회 참여에 동의하여야 지원서를 제출할 수 있습니다.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "제출하기"
          )}
        </Button>
      </form>
    </Form>
  );
}
