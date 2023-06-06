export type Nullable<T> = T | null;
export type EntityWithId<T> = T & { id: string };
export type WithChildren<T extends object> = T & { children: React.ReactNode };
export type WithOptionalChildren<T> = T & { children?: React.ReactNode };
