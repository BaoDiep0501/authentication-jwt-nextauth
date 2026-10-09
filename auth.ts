// NHIỆM VỤ 1: Cấu hình NextAuth
// 1. Import NextAuth và GitHub provider
// 2. Export handlers, auth, signIn, signOut
// 3. Khai báo session strategy là "jwt"

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  session: {
    strategy: "jwt",
  },
});