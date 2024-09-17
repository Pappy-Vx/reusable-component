import  { FC } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import clsx from 'clsx';
import { AvatarProps, AvatarImageProps, AvatarFallbackProps } from './Avatar.types';

// Avatar root component
export const AvatarComponent: FC<AvatarProps> = ({ asChild = false, className, children, onLoadingStatusChange }) => {
  return (
    <Avatar.Root asChild={asChild} className={clsx('AvatarRoot', className)}>
      {children}
    </Avatar.Root>
  );
};

// Avatar Image component
export const AvatarImage: FC<AvatarImageProps> = ({ src, alt, className }) => {
  return (
    <Avatar.Image
      src={src}
      alt={alt}
      className={clsx('AvatarImage', className)}
      onLoadingStatusChange={(status) => console.log(`Image loading status: ${status}`)} // You can handle this in props as well
    />
  );
};

// Avatar Fallback component
export const AvatarFallback: FC<AvatarFallbackProps> = ({ delayMs = 600, className, children }) => {
  return (
    <Avatar.Fallback className={clsx('AvatarFallback', className)} delayMs={delayMs}>
      {children}
    </Avatar.Fallback>
  );
};
