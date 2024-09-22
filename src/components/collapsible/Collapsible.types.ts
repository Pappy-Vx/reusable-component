export interface CollapsibleProps {
    asChild?: boolean;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface CollapsibleTriggerProps {
    asChild?: boolean;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface CollapsibleContentProps {
    className?: string;
    children: React.ReactNode;
  }
  export interface CounterProps {
    value: number;
  }