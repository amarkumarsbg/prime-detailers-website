import * as React from "react"
import { cn } from "@/lib/utils"

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, type, label, id, placeholder, ...props }, ref) => {
    const inputId = id || `floating-input-${label.replace(/\s+/g, '-').toLowerCase()}`;
    
    return (
      <div className="relative w-full mt-2 mb-4">
        <input
          type={type}
          id={inputId}
          ref={ref}
          placeholder={placeholder || " "}
          className={cn(
            "peer block w-full rounded-md border-2 border-slate-300 bg-transparent px-3 py-3 text-slate-900 placeholder:text-transparent focus:border-teal-600 focus:placeholder:text-slate-400 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            className
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className="pointer-events-none absolute left-2 top-0 -translate-y-1/2 bg-white px-1 text-sm text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-teal-600"
        >
          {label}
        </label>
      </div>
    )
  }
)
FloatingInput.displayName = "FloatingInput"

export { FloatingInput }
