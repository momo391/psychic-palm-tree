"use server";

import { getCurrentSession } from "@/lib/cache/session";

export const AuthTest = async () => {
  const { session } = await getCurrentSession();
  if (session) return <p>user</p>;
  else if (!session) return <p>guest</p>;
  else return <p>error</p>;
};
