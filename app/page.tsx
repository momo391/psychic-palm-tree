import { LogOutButton } from "@/components/auth/log-out";
import { AuthView, GuestView } from "@/components/container/auth";
import { AuthTest } from "@/components/test/auth";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="grid place-items-center min-h-screen">
        <AuthTest />
        <div className="flex flex-col gap-8">
          <GuestView>
            <Link
              className={cn(buttonVariants({ variant: "default" }))}
              href={"/auth/login"}
            >
              Log In
            </Link>
            <Link
              className={cn(buttonVariants({ variant: "secondary" }))}
              href={"/auth/signup"}
            >
              Sign Up
            </Link>
          </GuestView>
          <AuthView>
            <LogOutButton />
          </AuthView>
        </div>
      </div>
    </>
  );
}
