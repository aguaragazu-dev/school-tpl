import React from 'react'
import { RegisterOptions } from 'react-hook-form'
import { Calendar } from "@/components/ui/calendar"
import { TextInput } from './TextInput'

type DateInputProps = {
  label?: string,
  name: string,
  toolTipText?: string,
  registerOptions?: RegisterOptions,
};

export function DateInput({
  label = "Date",
  name,
  toolTipText,
  registerOptions,
}: DateInputProps) {
  return (
    <TextInput
      label={label}
      type="date"
      name={name}
      toolTipText={toolTipText}
      icon={Calendar}
      registerOptions={registerOptions}
    />
  );
}