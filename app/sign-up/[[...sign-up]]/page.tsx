'use client';

import { SignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  const handleSignUpSuccess = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignUp
        path="/sign-up"
        routing="path"
        signUpUrl="/sign-up"
        afterSignUpUrl="/dashboard"
        onSignUpSuccess={handleSignUpSuccess}
      />
    </div>
  );
}
