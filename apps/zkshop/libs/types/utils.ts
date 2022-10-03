import { ReactNode } from 'react';

export type EntityWithId<T> = T & { id: string };
export type WithChildren<T> = T & { children: ReactNode };
export type WithOptionalChildren<T> = T & { children?: ReactNode };
