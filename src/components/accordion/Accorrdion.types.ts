export interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  value?: string | string[];
  collapsible?: boolean;
  onValueChange?: (value: string | string[]) => void;
  className?: string;
  children: React.ReactNode;
}

export interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}

export interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}
