import { FC } from 'react';
import * as Form from '@radix-ui/react-form';
import clsx from 'clsx';
import { FormProps, FormFieldProps, FormButtonProps, FormMessageProps } from './Form.types';

// Main Form component
export const FormComponent: FC<FormProps> = ({ onSubmit, className, children }) => {
  return (
    <Form.Root onSubmit={onSubmit} className={clsx('FormRoot', className)}>
      {children}
    </Form.Root>
  );
};

// FormField component
export const FormField: FC<FormFieldProps> = ({ name, label, type = 'text', className, register, error }) => {
  return (
    <Form.Field name={name} className={clsx('FormField', className)}>
      {label && <Form.Label className="FormLabel">{label}</Form.Label>}
      <Form.Control asChild>
        <input {...register(name)} type={type} className={clsx('FormControl', error && 'FormControlError')} />
      </Form.Control>
      {error && <FormMessage message={error} className="FormErrorMessage" />}
    </Form.Field>
  );
};

// FormButton component
export const FormButton: FC<FormButtonProps> = ({ disabled, className, children }) => {
  return (
    <Form.Submit asChild>
      <button type="submit" disabled={disabled} className={clsx('FormSubmitButton', className)}>
        {children}
      </button>
    </Form.Submit>
  );
};

// FormMessage component
export const FormMessage: FC<FormMessageProps> = ({ message, className }) => {
  return (
    <Form.Message className={clsx('FormMessage', className)}>
      {message}
    </Form.Message>
  );
};
