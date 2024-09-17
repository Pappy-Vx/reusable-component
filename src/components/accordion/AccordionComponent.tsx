import { FC, forwardRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps } from './Accorrdion.types';
 import { ChevronDownIcon } from '@radix-ui/react-icons';

// Main Accordion component
export const AccordionComponent: FC<AccordionProps> = ({
  type = 'single',
  defaultValue,
  value,
  collapsible = false,
  onValueChange,
  className,
  children,
}) => {
  return (
    <Accordion.Root
      type={type}
      defaultValue={defaultValue}
      value={value}
      collapsible={collapsible}
      onValueChange={onValueChange}
      className={clsx('AccordionRoot', className)}
    >
      {children}
    </Accordion.Root>
  ); 
};

// AccordionItem component
export const AccordionItem: FC<AccordionItemProps> = ({ value, className, children }) => {
  return (
    <Accordion.Item className={clsx('AccordionItem', className)} value={value}>
      {children}
    </Accordion.Item>
  );
};

// AccordionTrigger component
export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={clsx('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

// AccordionContent component
export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content className={clsx('AccordionContent', className)} {...props} ref={forwardedRef}>
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';
