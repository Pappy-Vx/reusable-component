import { FC } from 'react';
import * as Toast from '@radix-ui/react-toast';
import clsx from 'clsx';
import {
  ToastProviderProps,
  ToastRootProps,
  ToastTitleProps,
  ToastDescriptionProps,
  ToastActionProps,
  ToastCloseProps,
  ToastViewportProps,
} from './Toast.types';

// Toast Provider Component
export const ToastProvider: FC<ToastProviderProps> = ({
  swipeDirection = 'right',
  duration = 5000,
  swipeThreshold = 50,
  children,
}) => {
  return (
    <Toast.Provider
      swipeDirection={swipeDirection}
      duration={duration}
      swipeThreshold={swipeThreshold}
    >
      {children}
    </Toast.Provider>
  );
};

// Toast Root Component
export const ToastRoot: FC<ToastRootProps> = ({ open, onOpenChange, className, children }) => {
  return (
    <Toast.Root
      className={clsx('ToastRoot', className)}
      open={open}
      onOpenChange={onOpenChange}
    >
      {children}
    </Toast.Root>
  );
};

// Toast Title Component
export const ToastTitle: FC<ToastTitleProps> = ({ className, children }) => {
  return <Toast.Title className={clsx('ToastTitle', className)}>{children}</Toast.Title>;
};

// Toast Description Component
export const ToastDescription: FC<ToastDescriptionProps> = ({ className, children }) => {
  return (
    <Toast.Description className={clsx('ToastDescription', className)}>{children}</Toast.Description>
  );
};

// Toast Action Component
export const ToastAction: FC<ToastActionProps> = ({ altText, asChild = false, className, children }) => {
  return (
    <Toast.Action className={clsx('ToastAction', className)} asChild={asChild} altText={altText}>
      {children}
    </Toast.Action>
  );
};

// Toast Close Component
export const ToastClose: FC<ToastCloseProps> = ({ className }) => {
  return <Toast.Close className={clsx('ToastClose', className)} />;
};

// Toast Viewport Component
export const ToastViewport: FC<ToastViewportProps> = ({ className }) => {
  return <Toast.Viewport className={clsx('ToastViewport', className)} />;
};
