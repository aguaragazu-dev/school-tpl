import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const salaryInfo = {
  baseSalary: 50000,
  bonuses: 2000,
  deductions: 1000,
  netSalary: 51000,
};

export default function SalaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Mi Salario</h1>
      <Card>
        <CardHeader>
          <CardTitle>Desglose de Salario</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Salario Base: ${salaryInfo.baseSalary}</p>
          <p>Bonificaciones: ${salaryInfo.bonuses}</p>
          <p>Deducciones: ${salaryInfo.deductions}</p>
          <p className="font-bold mt-2">Salario Neto: ${salaryInfo.netSalary}</p>
        </CardContent>
      </Card>
    </div>
  );
}