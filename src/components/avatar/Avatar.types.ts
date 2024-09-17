export interface AvatarProps {
    asChild?: boolean;
    className?: string;
    onLoadingStatusChange?: (status: 'idle' | 'loading' | 'loaded') => void;
    children: React.ReactNode;
  }
  
  export interface AvatarImageProps {
    src: string;
    alt?: string;
    className?: string;
  }
  
  export interface AvatarFallbackProps {
    delayMs?: number;
    className?: string;
    children: React.ReactNode;
  }
  