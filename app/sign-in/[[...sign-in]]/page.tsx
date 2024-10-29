'use client';

import { SignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  const handleSignInSuccess = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignIn
        path="/sign-in"
        routing="path"
        signInUrl="/sign-in"
        afterSignInUrl="/dashboard"
        onSignInSuccess={handleSignInSuccess}
      />
    </div>
  );
}
