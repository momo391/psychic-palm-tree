"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Icon } from "@iconify/react";

import Link from "next/link";

import { useState } from "react";
import { signup, SignUpResult } from "./actions";

import { redirect } from "next/navigation";
import { signUpSchema } from "@/schema/sign-up";

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const { setError } = form;

  const [loading, setLoading] = useState(false);
  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
    setLoading(true);
    const { where, message }: SignUpResult = await signup(values);
    setLoading(false);

    if (where === "username" || where === "email")
      setError(where, { type: "deps", message });
    else if (where === "Database" || where === "Server")
      setError("root", { type: "deps", message });
    else redirect("/");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="john" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usernanme</FormLabel>
                <FormControl>
                  <Input placeholder="John doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>confirm password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex  justify-between">
            <Link
              className={cn(buttonVariants({ variant: "link" }))}
              href={"/auth/login"}
            >
              already have an account ?
            </Link>

            <Button type="submit" disabled={loading}>
              {loading ? (
                <Icon icon="tabler:loader-2" className="animate-spin" />
              ) : null}
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
