import { FC, forwardRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { DialogProps, DialogTriggerProps, DialogOverlayProps, DialogContentProps, DialogTitleProps, DialogDescriptionProps, DialogCloseProps } from './Dialog.types';

// Main Dialog component
export const DialogComponent: FC<DialogProps> = ({
  defaultOpen,
  open,
  onOpenChange,
  modal = true,
  className,
  children,
}) => {
  return (
    <Dialog.Root
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      {children}
    </Dialog.Root>
  );
};

// DialogTrigger component
export const DialogTrigger: FC<DialogTriggerProps> = ({ asChild = false, className, children }) => {
  return (
    <Dialog.Trigger asChild={asChild} className={clsx('DialogTrigger', className)}>
      {children}
    </Dialog.Trigger>
  );
};

// DialogOverlay component
export const DialogOverlay: FC<DialogOverlayProps> = ({ className }) => {
  return <Dialog.Overlay className={clsx('DialogOverlay', className)} />;
};

// DialogContent component
export const DialogContent: FC<DialogContentProps> = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children }, forwardedRef) => {
    return (
      <Dialog.Content className={clsx('DialogContent', className)} ref={forwardedRef}>
        {children}
      </Dialog.Content>
    );
  }
);

// DialogTitle component
export const DialogTitle: FC<DialogTitleProps> = ({ className, children }) => {
  return <Dialog.Title className={clsx('DialogTitle', className)}>{children}</Dialog.Title>;
};

// DialogDescription component
export const DialogDescription: FC<DialogDescriptionProps> = ({ className, children }) => {
  return <Dialog.Description className={clsx('DialogDescription', className)}>{children}</Dialog.Description>;
};

// DialogClose component
export const DialogClose: FC<DialogCloseProps> = ({ asChild = false, className, children }) => {
  return (
    <Dialog.Close asChild={asChild} className={clsx('DialogClose', className)}>
      {children}
    </Dialog.Close>
  );
};
