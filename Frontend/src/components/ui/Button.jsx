import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ className, variant = 'primary', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-600 transition-all duration-300 transform";
  const variants = {
    primary: "btn-primary", // Uses CSS class from index.css
    outline: "border border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50",
    ghost: "text-slate-600 bg-transparent hover:bg-slate-100",
  };

  return (
    <button 
      className={twMerge(baseClasses, variants[variant], className)} 
      {...props} 
    />
  );
};
