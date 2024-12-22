"use server";

import { getCurrentSession } from "@/lib/cache/session";

export const GuestView = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { session } = await getCurrentSession();
  if (!session) return <>{children}</>;
};

export const AuthView = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { session } = await getCurrentSession();
  if (session) return <>{children}</>;
};
