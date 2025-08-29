import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface RTLWrapperProps {
  children: React.ReactNode;
  className?: string;
  rtlClassName?: string;
  ltrClassName?: string;
  dir?: 'ltr' | 'rtl' | 'auto';
}

export const RTLWrapper: React.FC<RTLWrapperProps> = ({
  children,
  className = '',
  rtlClassName = '',
  ltrClassName = '',
  dir = 'auto'
}) => {
  const { isRTL } = useLanguage();
  
  const finalDir = dir === 'auto' ? (isRTL ? 'rtl' : 'ltr') : dir;
  
  return (
    <div
      dir={finalDir}
      className={cn(
        className,
        isRTL ? rtlClassName : ltrClassName
      )}
    >
      {children}
    </div>
  );
};

// RTL-aware spacing utilities
export const RTLSpacer: React.FC<{ size: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size }) => {
  const { isRTL } = useLanguage();
  
  const sizeClasses = {
    sm: 'w-2',
    md: 'w-4',
    lg: 'w-6',
    xl: 'w-8'
  };
  
  return (
    <div className={cn(
      sizeClasses[size],
      'flex-shrink-0'
    )} />
  );
};

// RTL-aware icon wrapper
export const RTLIcon: React.FC<{
  children: React.ReactNode;
  className?: string;
  rtlFlip?: boolean;
}> = ({ children, className = '', rtlFlip = false }) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className={cn(
      className,
      rtlFlip && isRTL && 'transform scale-x-[-1]'
    )}>
      {children}
    </div>
  );
};

// RTL-aware text alignment
export const RTLText: React.FC<{
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'right' | 'center' | 'justify';
}> = ({ children, className = '', align = 'auto' }) => {
  const { isRTL } = useLanguage();
  
  const getAlignment = () => {
    if (align !== 'auto') return align;
    return isRTL ? 'right' : 'left';
  };
  
  return (
    <div className={cn(
      className,
      `text-${getAlignment()}`
    )}>
      {children}
    </div>
  );
}; 