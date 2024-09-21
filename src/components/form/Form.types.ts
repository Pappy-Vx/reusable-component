export interface FormProps {
    onSubmit: (data: any) => void;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface FormFieldProps {
    name: string;
    label?: string;
    type?: 'text' | 'password' | 'email';
    className?: string;
    register: any; // From react-hook-form
    error?: string;
  }
  
  export interface FormButtonProps {
    disabled: boolean;
    className?: string;
    children: React.ReactNode;
  }
  
  export interface FormMessageProps {
    message?: string;
    className?: string;
  }
  