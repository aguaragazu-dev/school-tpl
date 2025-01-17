"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, RegisterOptions } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface FormSelectInputProps {
  name: string;
  label: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  registerOptions?: RegisterOptions,
}

export default function FormSelectInput({
  name,
  label,
  control,
  options,
  placeholder,
  disabled,
  onChange,
  registerOptions,
}: FormSelectInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      rules={registerOptions}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-foreground">
            {label}
          </FormLabel>
          <Select
            disabled={disabled}
            onValueChange={(value) => {
              field.onChange(value);
              onChange?.(value);
            }}
            value={field.value}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger className="w-full bg-background dark:bg-gray-800/60 border-border">
                <SelectValue 
                  placeholder={placeholder || `Seleccione ${label.toLowerCase()}`} 
                  className="text-muted-foreground"
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-background dark:bg-gray-800/60 border-border">
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-foreground hover:bg-accent"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-destructive" />
        </FormItem>
      )}
    />
  );
}