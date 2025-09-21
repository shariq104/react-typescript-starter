import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { FormFieldProps } from '@types';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FormFieldProps {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, required, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          className={clsx('input', error && 'border-red-500 focus-visible:ring-red-500', className)}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
