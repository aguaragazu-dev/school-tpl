
import { UserResource } from '@clerk/nextjs';

declare module '@clerk/nextjs' {
  interface UserResource {
    role?: string;
  }
}