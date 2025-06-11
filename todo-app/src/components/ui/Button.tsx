'use client';

import { ButtonHTMLAttributes } from 'react';

// 1. Definimos los tipos para las variantes
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';

// 2. Interface para las props del botón
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

// 3. Tipo para el objeto de variantes
type VariantClasses = Record<ButtonVariant, string>;

// 4. Objeto de variantes con tipado explícito
const variants: VariantClasses = {
  primary: `
    text-blue-600 hover:bg-blue-600 hover:text-white
    dark:text-blue-400 dark:hover:bg-blue-500
    border-blue-600 dark:border-blue-400
    focus:ring-blue-300 dark:focus:ring-blue-800
  `,
  secondary: `
    text-gray-600 hover:bg-gray-600 hover:text-white
    dark:text-gray-400 dark:hover:bg-gray-500
    border-gray-600 dark:border-gray-400
    focus:ring-gray-300 dark:focus:ring-gray-800
  `,
  danger: `
    text-red-600 hover:bg-red-600 hover:text-white
    dark:text-red-400 dark:hover:bg-red-500
    border-red-600 dark:border-red-400
    focus:ring-red-300 dark:focus:ring-red-800
  `,
  success: `
    text-green-600 hover:bg-green-600 hover:text-white
    dark:text-green-400 dark:hover:bg-green-500
    border-green-600 dark:border-green-400
    focus:ring-green-300 dark:focus:ring-green-800
  `
} as const; // "as const" para inferencia literal

// 5. Objeto de tamaños con tipado
const sizes: Record<ButtonSize, string> = {
  sm: 'text-2xl w-12 h-12',
  md: 'text-4xl w-16 h-16',
  lg: 'text-6xl w-20 h-20'
} as const;

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = `
    rounded-full flex items-center justify-center
    transition-colors duration-300
    focus:outline-none focus:ring-4
    border-2
  `;

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};