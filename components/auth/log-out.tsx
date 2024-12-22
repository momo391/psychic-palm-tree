"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth/log-out";

export const LogOutButton = () => {
  return (
    <>
      <Button variant={"destructive"} onClick={() => logout}>
        Log Out
      </Button>
    </>
  );
};
