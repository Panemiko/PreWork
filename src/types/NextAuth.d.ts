import type { User as PrismaUser } from "@prisma/client";
import type { DefaultSession } from "next-auth";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  /**
   * Exposed to the final user (session)
   */
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  /**
   * Exposed to the server callbacks
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface User extends PrismaUser {}
}

// Required to apply the typings across the project
export {};
