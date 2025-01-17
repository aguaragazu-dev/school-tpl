import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from 'lucide-react';
import { Input } from "@/components/ui/input";

type TextInputProps = {
  label: string,
  type?: string,
  name: string,
  toolTipText?: string,
  unit?: string,
  placeholder?: string,
  icon?: any,
  registerOptions?: RegisterOptions,
  required?: boolean
};

export function TextInput({
  label,
  type = "text",
  name,
  toolTipText,
  unit,
  icon: Icon,
  placeholder,
  registerOptions,
  required = false
}: TextInputProps) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button>
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
      <div className="mt-2">
        <div className="relative rounded-md ">
          {Icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon className="text-slate-300 w-4 h-4" />
            </div>
          )}
          <Input
            id={name}
            type={type}
            {...register(name, { required: required, ...registerOptions })}
            className={cn(
              "block w-full rounded-md border-0 py-2 pl-4 text-foreground bg-background dark:bg-gray-800/60 shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 text-sm",
           (errors[name] && "focus:ring-red-500 pl-8") ||
                (Icon && "pl-8")
            )}
            placeholder={placeholder || label}
          />
          {unit && (
            <p className="bg-white py-2 px-3 rounded-tr-md rounded-br-md absolute inset-y-0 right-1 my-[2px] flex items-center">
              {unit}
            </p>
          )}
        </div>
        {errors[name] && (
          <span className="text-xs text-red-600">{label} es requerido | {errors[name]?.message as string}</span>
        )}
      </div>
    </div>
  );
}

