export const isNil = <T>(obj: T | null | undefined): obj is null | undefined =>
  obj === null || obj === undefined;
