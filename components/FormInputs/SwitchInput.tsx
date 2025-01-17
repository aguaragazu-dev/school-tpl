import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type SwitchInputProps = {
  name: string,
  label: string,
  description?: string,
  registerOptions?: RegisterOptions,
};

export function SwitchInput({
  name,
  label,
  description,
  registerOptions,
}: SwitchInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      rules={registerOptions}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <FormLabel className="text-base">{label}</FormLabel>
            {description && (
              <FormDescription>
                {description}
              </FormDescription>
            )}
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

