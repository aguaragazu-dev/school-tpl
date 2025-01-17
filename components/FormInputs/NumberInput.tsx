import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

type NumberInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  registerOptions?: RegisterOptions;
  min?: number;
  max?: number;
  step?: number;
  currency?: string;
  prefix?: string;
  suffix?: string;
  allowDecimals?: boolean;
  decimalPlaces?: number;
};

export function NumberInput({
  name,
  label,
  placeholder,
  description,
  registerOptions,
  min,
  max,
  step,
  currency,
  prefix,
  suffix,
  allowDecimals = true,
  decimalPlaces = 2,
}: NumberInputProps) {
  const { control } = useFormContext();
  const [displayValue, setDisplayValue] = React.useState<string>("");

  // Format number for display
  const formatNumber = (num: number): string => {
    if (typeof num !== 'number' || isNaN(num)) return '';
    
    if (!allowDecimals) {
      return Math.round(num).toString();
    }

    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
      useGrouping: false
    });
  };

  // Parse string input to number
  const parseNumber = (value: string): number => {
    // Remove currency symbol, spaces, and any grouping characters
    const cleanValue = value.replace(/[^\d.-]/g, '');
    
    if (cleanValue === '' || cleanValue === '-') return 0;
    
    const parsedValue = parseFloat(cleanValue);
    return isNaN(parsedValue) ? 0 : parsedValue;
  };

  return (
    <FormField
      control={control}
      name={name}
      rules={registerOptions}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative rounded-md shadow-sm">
              {(currency || prefix) && (
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">
                    {currency || prefix}
                  </span>
                </div>
              )}
              <Input
                type="text"
                inputMode="decimal"
                min={min}
                max={max}
                step={step || (allowDecimals ? `0.${'0'.repeat(decimalPlaces-1)}1` : '1')}
                placeholder={placeholder}
                value={displayValue || formatNumber(field.value)}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setDisplayValue(inputValue);
                  
                  // Only update the form value if we have a valid number
                  if (inputValue.match(/^-?\d*\.?\d*$/)) {
                    const numValue = parseNumber(inputValue);
                    field.onChange(numValue);
                  }
                }}
                onBlur={(e) => {
                  const numValue = parseNumber(e.target.value);
                  field.onChange(numValue);
                  setDisplayValue(formatNumber(numValue));
                  field.onBlur();
                }}
                className={cn(
                  (currency || prefix) && "pl-7",
                  suffix && "pr-12"
                )}
              />
              {suffix && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm">{suffix}</span>
                </div>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

