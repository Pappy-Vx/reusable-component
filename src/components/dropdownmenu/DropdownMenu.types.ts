export interface DropdownMenuProps {
    children: React.ReactNode;
    asChild?: boolean;
  }
  
  export interface DropdownMenuItemProps {
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
  }
  
  export interface DropdownMenuSubProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export interface DropdownMenuCheckboxItemProps {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface DropdownMenuRadioGroupProps {
    value: string;
    onValueChange: (value: string) => void;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface DropdownMenuRadioItemProps {
    value: string;
    className?: string;
    children: React.ReactNode;
  }
  