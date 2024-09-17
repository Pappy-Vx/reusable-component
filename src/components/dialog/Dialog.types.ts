export interface DialogProps {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    modal?: boolean;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface DialogTriggerProps {
    asChild?: boolean;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface DialogOverlayProps {
    className?: string;
  }
  
  export interface DialogContentProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export interface DialogTitleProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export interface DialogDescriptionProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export interface DialogCloseProps {
    asChild?: boolean;
    className?: string;
    children: React.ReactNode;
  }
  