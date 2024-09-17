export interface AlertDialogProps {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface AlertDialogTriggerProps {
    asChild?: boolean;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface AlertDialogOverlayProps {
    className?: string;
  }
  
  export interface AlertDialogContentProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export interface AlertDialogTitleProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export interface AlertDialogDescriptionProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export interface AlertDialogCancelProps {
    asChild?: boolean;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface AlertDialogActionProps {
    asChild?: boolean;
    className?: string;
    children: React.ReactNode;
  }
  