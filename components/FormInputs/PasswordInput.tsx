"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp, Eye, EyeOff, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

type PasswordInputProps = {
  label: string;
  name: string;
  toolTipText?: string;
  placeholder?: string;
  forgotPasswordLink?: string;
  icon?: LucideIcon;
};

export default function PasswordInput({
  label,
  name,
  toolTipText,
  icon: Icon,
  placeholder,
  forgotPasswordLink,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState: { errors } } = useFormContext();
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <div className="flex items-center justify-between w-full">
          <label
            htmlFor={name}
            className="block text-sm font-medium leading-6 text-foreground"
          >
            {label}
          </label>
          {forgotPasswordLink && (
            <div className="text-sm">
              <Link
                href={forgotPasswordLink}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                ¿Olvido su contraseña?
              </Link>
            </div>
          )}
        </div>
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
      <div className="relative mt-2">
        <input
          id={name}
          type={showPassword ? "text" : "password"}
          {...register(name, {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            },
          })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            errors[name] && "border-red-500"
          )}
          placeholder={placeholder || label}
        />
        {Icon && (
          <Icon className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
        )}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );
}