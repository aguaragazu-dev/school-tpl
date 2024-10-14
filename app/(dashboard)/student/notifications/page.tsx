import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const notifications = [
  { id: 1, title: 'Recordatorio de Examen', message: 'Examen de Matemáticas mañana a las 9:00 AM', date: '2023-06-14' },
  { id: 2, title: 'Entrega de Proyecto', message: 'La entrega del proyecto de Historia es el viernes', date: '2023-06-13' },
  { id: 3, title: 'Reunión de Padres', message: 'Reunión de padres el próximo lunes a las 18:00', date: '2023-06-12' },
];

export default function NotificationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Notificaciones</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id}>
            <CardHeader>
              <CardTitle>{notification.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{notification.message}</p>
              <p className="text-sm text-gray-500 mt-2">Fecha: {notification.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}