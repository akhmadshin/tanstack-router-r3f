import type { PropsWithChildren } from 'react';
import type React from 'react';

export type ParentComponent<T = unknown> = React.FC<PropsWithChildren<T>>;
export type Component<T = unknown> = React.FC<T>;

export type WithClassName = {
  className?: string;
};
