import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// RTL-aware utility functions
export function getRTLSpacing(isRTL: boolean, leftSpacing: string, rightSpacing: string) {
  return isRTL ? rightSpacing : leftSpacing;
}

export function getRTLMargin(isRTL: boolean, leftMargin: string, rightMargin: string) {
  return isRTL ? rightMargin : leftMargin;
}

export function getRTLPadding(isRTL: boolean, leftPadding: string, rightPadding: string) {
  return isRTL ? rightPadding : leftPadding;
}

export function getRTLPosition(isRTL: boolean, leftPosition: string, rightPosition: string) {
  return isRTL ? rightPosition : leftPosition;
}

export function getRTLTransform(isRTL: boolean, leftTransform: string, rightTransform: string) {
  return isRTL ? rightTransform : leftTransform;
}

// RTL-aware class builders
export function rtlClasses(isRTL: boolean, ltrClasses: string, rtlClasses: string) {
  return isRTL ? rtlClasses : ltrClasses;
}

export function rtlSpacing(isRTL: boolean, baseClass: string, ltrSpacing: string, rtlSpacing: string) {
  return `${baseClass} ${isRTL ? rtlSpacing : ltrSpacing}`;
}

// RTL-aware flexbox utilities
export function rtlFlexDirection(isRTL: boolean, baseClass: string = 'flex') {
  return `${baseClass} ${isRTL ? 'flex-row-reverse' : 'flex-row'}`;
}

export function rtlJustifyContent(isRTL: boolean, baseClass: string = 'justify') {
  return `${baseClass}-${isRTL ? 'end' : 'start'}`;
}

export function rtlTextAlign(isRTL: boolean, baseClass: string = 'text') {
  return `${baseClass}-${isRTL ? 'right' : 'left'}`;
}
