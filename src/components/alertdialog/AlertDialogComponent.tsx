import { FC } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';
import {
  AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogOverlayProps,
  AlertDialogContentProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogCancelProps,
  AlertDialogActionProps,
} from './AlertDialog.types';

// Main AlertDialog Component
export const AlertDialogComponent: FC<AlertDialogProps> = ({
  defaultOpen,
  open,
  onOpenChange,
  className,
  children,
}) => {
  return (
    <AlertDialog.Root
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      className={clsx('AlertDialogRoot', className)}
    >
      {children}
    </AlertDialog.Root>
  );
};

// AlertDialog Trigger
export const AlertDialogTrigger: FC<AlertDialogTriggerProps> = ({ asChild, className, children }) => {
  return (
    <AlertDialog.Trigger asChild={asChild} className={clsx('AlertDialogTrigger', className)}>
      {children}
    </AlertDialog.Trigger>
  );
};

// AlertDialog Overlay
export const AlertDialogOverlay: FC<AlertDialogOverlayProps> = ({ className }) => {
  return <AlertDialog.Overlay className={clsx('AlertDialogOverlay', className)} />;
};

// AlertDialog Content
export const AlertDialogContent: FC<AlertDialogContentProps> = ({ className, children }) => {
  return (
    <AlertDialog.Content className={clsx('AlertDialogContent', className)}>
      {children}
    </AlertDialog.Content>
  );
};

// AlertDialog Title
export const AlertDialogTitle: FC<AlertDialogTitleProps> = ({ className, children }) => {
  return <AlertDialog.Title className={clsx('AlertDialogTitle', className)}>{children}</AlertDialog.Title>;
};

// AlertDialog Description
export const AlertDialogDescription: FC<AlertDialogDescriptionProps> = ({ className, children }) => {
  return <AlertDialog.Description className={clsx('AlertDialogDescription', className)}>{children}</AlertDialog.Description>;
};

// AlertDialog Cancel
export const AlertDialogCancel: FC<AlertDialogCancelProps> = ({ asChild, className, children }) => {
  return (
    <AlertDialog.Cancel asChild={asChild} className={clsx('AlertDialogCancel', className)}>
      {children}
    </AlertDialog.Cancel>
  );
};

// AlertDialog Action
export const AlertDialogAction: FC<AlertDialogActionProps> = ({ asChild, className, children }) => {
  return (
    <AlertDialog.Action asChild={asChild} className={clsx('AlertDialogAction', className)}>
      {children}
    </AlertDialog.Action>
  );
};
