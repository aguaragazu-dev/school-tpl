'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@clerk/nextjs';

export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const router = useRouter();
  const { userId } = useAuth();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
    // Here you would typically send the login data to your backend
    // For demonstration, we'll use a simple role-based redirect
    if (loginData.email.includes('admin')) {
      router.push('/admin');
    } else if (loginData.email.includes('teacher')) {
      router.push('/teacher');
    } else {
      router.push('/student');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Acceso al Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
              <TabsTrigger value="register">Registrarse</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label htmlFor="loginEmail">Email</label>
                  <Input id="loginEmail" name="email" type="email" value={loginData.email} onChange={handleLoginChange} required />
                </div>
                <div>
                  <label htmlFor="loginPassword">Contraseña</label>
                  <Input id="loginPassword" name="password" type="password" value={loginData.password} onChange={handleLoginChange} required />
                </div>
                <Button type="submit">Iniciar Sesión</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              {/* Registration form can be added here */}
              <p>Registro no disponible. Por favor, contacte al administrador.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
