export type EntityWithId<T> = T & { id: string };
export type WithChildren<T> = T & { children: React.ReactNode };
export type WithOptionalChildren<T> = T & { children?: React.ReactNode };
