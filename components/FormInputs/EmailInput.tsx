import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Mail } from 'lucide-react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from 'lucide-react';
import { cn } from "@/lib/utils";

type EmailInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  toolTipText?: string;
  registerOptions?: RegisterOptions;
  autoComplete?: string;
};

export function EmailInput({
  name,
  label = "Email",
  placeholder = "Enter your email",
  description,
  toolTipText,
  registerOptions = {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  autoComplete = "email",
}: EmailInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      rules={registerOptions}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center space-x-2">
            <FormLabel>{label}</FormLabel>
            {toolTipText && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button">
                      <CircleHelp className="w-4 h-4 text-slate-500" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{toolTipText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <FormControl>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-4 w-4 text-slate-400" />
              </div>
              <Input
                {...field}
                type="email"
                placeholder={placeholder}
                className={cn("pl-9")}
                autoComplete={autoComplete}
              />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

