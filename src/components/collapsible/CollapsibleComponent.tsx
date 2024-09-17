import  { FC, forwardRef } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import clsx from 'clsx';
import { CollapsibleProps, CollapsibleTriggerProps, CollapsibleContentProps } from './Collapsible.types';

// Main Collapsible component
export const CollapsibleComponent: FC<CollapsibleProps> = ({
  asChild = false,
  defaultOpen,
  open,
  onOpenChange,
  disabled = false,
  className,
  children,
}) => {
  return (
    <Collapsible.Root
      asChild={asChild}
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      disabled={disabled}
      className={clsx('CollapsibleRoot', className)}
    >
      {children}
    </Collapsible.Root>
  );
};

// CollapsibleTrigger component
export const CollapsibleTrigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ asChild = false, children, className, ...props }, forwardedRef) => {
    return (
      <Collapsible.Trigger
        asChild={asChild}
        className={clsx('CollapsibleTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Collapsible.Trigger>
    );
  }
);

// CollapsibleContent component
export const CollapsibleContent = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Collapsible.Content
        className={clsx('CollapsibleContent', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Collapsible.Content>
    );
  }
);

CollapsibleTrigger.displayName = 'CollapsibleTrigger';
CollapsibleContent.displayName = 'CollapsibleContent';
