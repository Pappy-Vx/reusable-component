export interface ToastProviderProps {
    swipeDirection?: 'up' | 'down' | 'left' | 'right';
    label?: string;
    duration?: number;
    swipeThreshold?: number;
    children: React.ReactNode;
  }
  
  export interface ToastRootProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface ToastTitleProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export interface ToastDescriptionProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export interface ToastActionProps {
    altText: string;
    asChild?: boolean;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface ToastCloseProps {
    className?: string;
  }
  
  export interface ToastViewportProps {
    className?: string;
  }
  