import  { FC} from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import {
  DropdownMenuProps,
  DropdownMenuItemProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuSubProps,
} from './DropdownMenu.types';

// DropdownMenu Root component
export const DropdownMenuRoot: FC<DropdownMenuProps> = ({ children, open, onOpenChange}) => (
  <DropdownMenu.Root
  open ={open}
  onOpenChange = {onOpenChange}
  >{children}</DropdownMenu.Root>
);

// DropdownMenu Trigger component
export const DropdownMenuTrigger: FC<DropdownMenuTriggerProps> = ({ children, className }) => (
  <DropdownMenu.Trigger className={clsx(className)}>
    {children}
  </DropdownMenu.Trigger>
);

// DropdownMenu Content component
export const DropdownMenuContent: FC<DropdownMenuContentProps> = ({ children, className }) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content className={clsx('DropdownMenuContent', className)} sideOffset={5}>
      {children}
      <DropdownMenu.Arrow className="DropdownMenuArrow" />
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
);

// DropdownMenuItem component
export const DropdownMenuItem: FC<DropdownMenuItemProps> = ({ children, className, disabled }) => (
  <DropdownMenu.Item className={clsx('DropdownMenuItem', className)} disabled={disabled}>
    {children}
  </DropdownMenu.Item>
);

// DropdownMenuCheckboxItem component
export const DropdownMenuCheckboxItem: FC<DropdownMenuCheckboxItemProps> = ({
  children,
  className,
  checked,
  onCheckedChange,
}) => (
  <DropdownMenu.CheckboxItem
    className={clsx('DropdownMenuCheckboxItem', className)}
    checked={checked}
    onCheckedChange={onCheckedChange}
  >
    {children}
    <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
      {/* You can customize the check icon here */}
    </DropdownMenu.ItemIndicator>
  </DropdownMenu.CheckboxItem>
);

// DropdownMenuRadioGroup component
export const DropdownMenuRadioGroup: FC<DropdownMenuRadioGroupProps> = ({
  children,
  value,
  onValueChange,
  className,
}) => (
  <DropdownMenu.RadioGroup value={value} onValueChange={onValueChange} className={clsx(className)}>
    {children}
  </DropdownMenu.RadioGroup>
);

// DropdownMenuRadioItem component
export const DropdownMenuRadioItem: FC<DropdownMenuRadioItemProps> = ({ children, value, className }) => (
  <DropdownMenu.RadioItem value={value} className={clsx('DropdownMenuRadioItem', className)}>
    {children}
    <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
      {/* Customize the radio dot icon */}
    </DropdownMenu.ItemIndicator>
  </DropdownMenu.RadioItem>
);

// DropdownMenuSub component
export const DropdownMenuSub: FC<DropdownMenuSubProps> = ({ children, className }) => (
  <DropdownMenu.Sub>
    <DropdownMenu.SubTrigger className={clsx('DropdownMenuSubTrigger', className)}>
      {children}
    </DropdownMenu.SubTrigger>
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent className={clsx('DropdownMenuSubContent', className)} sideOffset={2} alignOffset={-5}>
        {children}
      </DropdownMenu.SubContent>
    </DropdownMenu.Portal>
  </DropdownMenu.Sub>
);
